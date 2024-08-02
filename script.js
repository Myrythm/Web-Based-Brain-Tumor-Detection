

// Load the TensorFlow.js model
let model;

async function loadModel() {
    try {
        model = await tf.loadLayersModel('./tfjs_model/model.json');
        console.log('Model loaded');
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

loadModel();

// Handle image upload and prediction
document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.id = 'uploadedImage';
            img.classList.add('rounded-lg', 'shadow-lg');
            img.onload = function() {
                document.getElementById('imagePreview').innerHTML = '';
                document.getElementById('imagePreview').appendChild(img);
            }
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('predictBtn').addEventListener('click', async function() {
    const imgElement = document.getElementById('uploadedImage');
    if (imgElement && model) {
        try {
            // Convert image to tensor and preprocess
            const tensor = tf.browser.fromPixels(imgElement, 1) // Convert to grayscale
                .resizeBilinear([150, 150]) // Resize image
                .toFloat()
                .div(tf.scalar(255)) // Normalize to [0, 1]
                .expandDims();

            console.log('Tensor Shape:', tensor.shape);

            // Predict
            const prediction = model.predict(tensor);
            console.log('Prediction:', prediction);

            const classIndex = prediction.argMax(-1).dataSync()[0];
            console.log('Class Index:', classIndex);

            const classes = ['Glioma', 'Meningioma', 'Normal', 'Pituitary'];
            const label = classes[classIndex];

            document.getElementById('resultLabel').innerText = `Terdeteksi: ${label}`;
        } catch (error) {
            console.error('Error during prediction:', error);
            alert('Terjadi kesalahan selama prediksi. Silakan coba lagi.');
        }
    } else {
        alert('Silakan unggah gambar dan tunggu model dimuat.');
    }
});
