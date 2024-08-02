# Brain Tumor Detection Web Application

## Overview

This web application uses TensorFlow.js to detect brain tumors from uploaded images. It leverages a pre-trained deep learning model to classify images into four categories: Glioma, Meningioma, Normal, and Pituitary. The application is designed to be user-friendly and provides a simple interface for image upload and prediction.

## Features

- **Image Upload**: Users can upload brain MRI images for analysis.
- **Image Preview**: Displays the uploaded image before prediction.
- **Prediction Result**: Shows the predicted class and the uploaded image.

## Technologies Used

- **TensorFlow.js**: JavaScript library for machine learning.
- **HTML/CSS**: For web page structure and styling.
- **JavaScript**: For client-side logic and interaction.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox).
- Basic understanding of HTML, CSS, and JavaScript.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Myrythm/Web-Based-Brain-Tumor-Detection
    ```

2. **Navigate to the project directory**

    ```bash
    cd Web-Based-Brain-Tumor-Detection
    ```

3. **Open `index.html` in your web browser**

    Simply double-click the `index.html` file or open it using your browser's "Open File" option.

### Model File

Ensure that the TensorFlow.js model (`model.json` and associated binary weight files) is located in the `tfjs_model` directory relative to the HTML file.

## Usage

1. **Upload an Image**: Click on the "Choose File" button to upload a brain MRI image.
2. **Preview Image**: The selected image will be displayed for confirmation.
3. **Predict**: Click the "Deteksi Tumor" button to get the classification result.
4. **View Results**: The predicted class and the uploaded image will be shown.

## Screenshoots
![Screenshot 2024-08-02 222359](https://github.com/user-attachments/assets/1a87f7d8-a87d-4254-9270-749ce6790694)
![Screenshot 2024-08-02 222334](https://github.com/user-attachments/assets/cf9ddc7b-9871-4983-a70b-a5c453ea5e6e)


## Development

To modify or extend the application:

1. **Update `script.js`**: Add or change functionality in the JavaScript file.
2. **Edit `style.css`**: Customize the appearance of the web application.
3. **Update Model**: Replace or retrain the TensorFlow.js model as needed.

## Troubleshooting

- **Model Not Loading**: Ensure that the `model.json` and weight files are correctly placed and accessible.
- **Prediction Issues**: Verify that the image size and format match the model's requirements.
