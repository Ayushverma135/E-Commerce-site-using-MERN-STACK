# E-Commerce Site

Welcome to the E-Commerce site project, a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project provides a robust platform for online shopping with user authentication, product management, and secure payment processing using PayTM.

## Overview

This E-Commerce site is a full-featured application that includes both frontend and backend functionalities. The frontend is built with React.js, offering a dynamic and interactive user experience, while the backend is powered by Node.js and Express.js, providing a RESTful API for managing data stored in a MongoDB database.

## Features

- **User Authentication**: Sign up, login, and logout functionalities with JWT (JSON Web Tokens) for secure user sessions.
- **Product Management**: Admins can add, update, or remove products from the inventory.
- **Shopping Cart**: Users can add products to their cart, adjust quantities, and proceed to checkout.
- **Order Management**: Users can place orders and view their order history. Admins can manage order statuses.
- **Payment Integration**: Secure payment processing using PayPal.
- **Responsive Design**: Fully responsive design for desktop and mobile devices.
- **Search and Filter**: Efficient product search and filtering by category, price, and more.


## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [MongoDB](https://www.mongodb.com/) (v4.x or later)

### Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/e-commerce-site.git
   cd e-commerce-site
   
2. **Install Dependencies**

  - Backend (server)

        cd server
        npm install
    The backend server will run on http://localhost:5000.
  - Frontend (client)

        cd ../client
        npm install
    The frontend server will run on http://localhost:3000.

## Environment Variables
Both the frontend and backend require specific environment variables to function correctly. Create .env files in the respective directories.

Backend (server/.env)

    MONGO_URI=mongodb://localhost:27017/yourdbname
    JWT_SECRET=your_jwt_secret
    PAYPAL_CLIENT_ID=your_paypal_client_id

## API Documentation
The backend API provides several endpoints for user management, product management, order management, and payment processing.

- User Routes: /api/users - User authentication and profile management.
- Product Routes: /api/products - CRUD operations for products.
- Order Routes: /api/orders - Order processing and management.
- Payment Routes: /api/payments - Payment processing with PayPal.
- Detailed API documentation can be found in the server/routes folder.

## Technologies Used
- **Frontend:** React.js, Redux, Axios, Material-UI
- **Backend:** Node.js, Express.js, Mongoose, JWT
- **Database:** MongoDB
- **Payment Gateway:** PayTM API
