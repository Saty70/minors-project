# Question Paper Analyzer

This project is a repository for previous year question papers of a university. It includes a machine learning-based approach to analyze question papers, extracting important information such as questions and their associated marks from images.

## Features

- **OCR-based Extraction**: Extracts questions and associated marks from scanned images of question papers.
- **Text and Marks Association**: Identifies and associates the marks with the corresponding questions.

## Installation

### Prerequisites

Ensure you have the following installed:

- Python 3.7 or later
- pip (Python package installer)

### Install Required Libraries

Use the following command to install the necessary Python libraries:

#### On Linux:

```bash
pip install pytesseract pdf2image opencv-python-headless numpy Pillow
```

#### On Windows:

```bash
pip install pytesseract pdf2image opencv-python numpy Pillow
```

### Install Tesseract OCR

#### On Linux:

```bash
sudo apt-get install tesseract-ocr
```

#### On Windows:

1. Download the [Tesseract OCR installer](https://github.com/tesseract-ocr/tesseract).
2. Install Tesseract and add the Tesseract executable to your system's PATH.

### Install Poppler Utilities (for PDF to Image Conversion)

#### On Linux:

```bash
sudo apt-get install poppler-utils
```

#### On Windows:

1. Download Poppler for Windows from [this link](http://blog.alivate.com.au/poppler-windows/).
2. Extract the contents and add the `bin` folder to your system's PATH.
