# Razorpay Integration with Django & React

This project demonstrates how to integrate Razorpay payment gateway using Django (for the backend) and React (for the frontend). The project allows users to make payments using Razorpay, with a basic subscription flow.

#  Table of Contents
## Prerequisites
## Configure Razorpay Keys
## Install Dependencies
## Testing Payment Flow

## Prerequisites
React.js (for React)
Python 3.x (for Django)
pipenv (for Python package management)
A Razorpay account (for API keys)
Django REST Framework (for building the API)
axios (for HTTP requests from React to Django)

## Configure Razorpay Keys
To securely authenticate with the Razorpay API, configure your Razorpay keys in the Django settings.py file:
#### Razorpay Configuration
```python
RAZORPAY_KEY_ID = 'your_razorpay_key_id'  # Replace with your Razorpay Key ID
RAZORPAY_SECRET_KEY = 'your_razorpay_secret_key'  # Replace with your Razorpay Secret Key.
```

## Testing Payment Flow
Ensure both the backend (Django server) and frontend (React app) are running.
Open the React app in your browser.
Click the "Upgrade Now" button to initiate the Razorpay payment flow.
Complete the payment and verify the response on both the frontend and backend.


