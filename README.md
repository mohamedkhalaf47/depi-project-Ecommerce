# 🛒 DEPI Project – E-Commerce Platform

An e-commerce web application developed as part of the Digital Egypt Pioneers Initiative (DEPI). Built using React and Vite, this platform offers a modern, responsive shopping experience.

## 🚀 Features

- **Product Catalog**: Browse a variety of products with detailed information.
- **Shopping Cart**: Add, remove, and manage items in your cart.
- **User Authentication**: Secure login and registration functionalities.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Fast Performance**: Leveraging Vite for rapid development and optimized builds.

## 🛠️ Tech Stack

### Frontend
- **React** – UI library for building user interfaces
- **Vite** – Fast build tool and development server
- **React Router** – Client-side routing
- **CSS Modules / Bootstrap CSS** – For styling
- **Context API / Redux-Toolkit** – For Managing State
- **ESLint** – Code linting

### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework
- **MongoDB** – NoSQL database for storing data
- **Mongoose** – ODM for MongoDB and Node.js
- **JWT (JSON Web Tokens)** – Authentication & authorization

## 📂 Project Structure

depi-project-Ecommerce/
├── client/                      # React frontend
│   ├── public/                  # Static assets (index.html, favicon, etc.)
│   └── src/                     # Frontend source code
│       ├── assets/              # Images and static files
│       ├── components/          # Reusable UI components
│       ├── pages/               # Route-level components
│       ├── services/            # API calls and integrations
│       ├── App.jsx              # Main app component
│       └── main.jsx             # React app entry point
│
├── server/                      # Express backend
│   ├── config/                  # Configuration files (e.g., DB, env)
│   ├── controllers/             # Route handlers
│   ├── middleware/              # Custom Express middleware
│   ├── models/                  # Mongoose models (schemas)
│   ├── routes/                  # API endpoint definitions
│   ├── utils/                   # Utility helper functions
│   └── server.js                # Express app entry point
│
├── .env                         # Environment variables
├── .gitignore                   # Git ignored files
├── package.json                 # Project metadata and scripts
├── vite.config.js               # Vite config for frontend
└── README.md                    # Project documentation
         


## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mohamedkhalaf47/depi-project-Ecommerce.git

# Navigate to the project directory
cd depi-project-Ecommerce

# Install dependencies
npm install
# or
yarn install

# Run Application
npm run dev
# or
yarn dev
