# E-Commerce Application

A full-stack e-commerce application built with React.js, Node.js, Express.js, and MongoDB. This project includes a customer-facing frontend, an admin panel for managing products and orders, and a robust backend API.

## 📋 Features

### Customer Features
- Browse products with search and filtering
- User authentication (signup/login)
- Shopping cart functionality
- Order placement and tracking
- User profile management
- Product reviews and ratings

### Admin Features
- Product management (add, edit, delete)
- Order management and status updates
- User management
- Dashboard with analytics
- Image upload for products

### Technical Features
- JWT-based authentication
- Image upload with Cloudinary
- Payment processing with Stripe
- Responsive design with Tailwind CSS
- RESTful API architecture

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router DOM** - Routing
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload
- **Cloudinary** - Image hosting
- **Stripe** - Payment processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Cloudinary account (for image uploads)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Milan-1002/E-commerce-Website.git
   cd Ecommerce-app
   ```

2. **Set up environment variables**
   
   Copy the example environment file and configure it:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your actual values:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   
   # JWT
   JWT_SECRET=your_strong_jwt_secret_here
   
   # Admin Credentials
   ADMIN_EMAIL=your_admin@email.com
   ADMIN_PASSWORD=your_secure_password
   
   # Cloudinary (Get from https://cloudinary.com/)
   CLOUDINARY_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_SECRET_KEY=your_secret_key
   
   # Stripe (Get from https://stripe.com/)
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   
   # URLs
   VITE_BACKEND_URL=http://localhost:4000
   VITE_ADMIN_URL=http://localhost:5174
   ```

3. **Install dependencies for all modules**
   ```bash
   # Backend dependencies
   cd backend
   npm install
   
   # Frontend dependencies
   cd ../frontend
   npm install
   
   # Admin panel dependencies
   cd ../admin
   npm install
   ```

4. **Start the application**
   
   Open three terminal windows/tabs:
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run server
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   
   **Terminal 3 - Admin Panel:**
   ```bash
   cd admin
   npm run dev
   ```

5. **Access the application**
   - Frontend (Customer): http://localhost:5173
   - Admin Panel: http://localhost:5174
   - Backend API: http://localhost:4000

## 📁 Project Structure

```
Ecommerce-app/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js      # Cloudinary configuration
│   │   └── mongodb.js         # MongoDB connection
│   ├── controllers/           # Route handlers
│   ├── middleware/            # Custom middleware
│   ├── models/               # Database schemas
│   ├── routes/               # API routes
│   └── server.js             # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── context/          # React context
│   │   ├── pages/            # Page components
│   │   └── assets/           # Static assets
│   └── index.html
├── admin/
│   ├── src/
│   │   ├── components/       # Admin components
│   │   ├── pages/            # Admin pages
│   │   └── assets/           # Admin assets
│   └── index.html
├── .env.example              # Environment variables template
└── README.md
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/ecommerce` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key` |
| `ADMIN_EMAIL` | Admin login email | `admin@example.com` |
| `ADMIN_PASSWORD` | Admin login password | `securepassword` |
| `CLOUDINARY_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_SECRET_KEY` | Cloudinary secret key | `your_secret_key` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_...` |
| `PORT` | Backend server port | `4000` |
| `VITE_BACKEND_URL` | Backend URL for frontend | `http://localhost:4000` |
| `VITE_ADMIN_URL` | Admin panel URL | `http://localhost:5174` |

### Setting up External Services

#### MongoDB
- **Local:** Install MongoDB locally
- **Cloud:** Use MongoDB Atlas (recommended)
  1. Create account at https://mongodb.com/atlas
  2. Create a cluster
  3. Get connection string
  4. Add to `MONGODB_URI`

#### Cloudinary
1. Create account at https://cloudinary.com/
2. Go to Dashboard
3. Copy Cloud Name, API Key, and API Secret
4. Add to environment variables

#### Stripe
1. Create account at https://stripe.com/
2. Go to Developers > API Keys
3. Copy Secret Key (use test key for development)
4. Add to `STRIPE_SECRET_KEY`

## 📱 Usage

### For Customers
1. Visit the frontend URL
2. Browse products
3. Sign up or log in
4. Add products to cart
5. Proceed to checkout
6. Make payment via Stripe

### For Admins
1. Visit the admin panel URL
2. Log in with admin credentials
3. Manage products:
   - Add new products with images
   - Edit existing products
   - Delete products
4. View and manage orders
5. Monitor sales and analytics

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm run test
```

### Linting
```bash
# Frontend
cd frontend
npm run lint

# Admin
cd admin
npm run lint
```

## 📦 Building for Production

### Frontend
```bash
cd frontend
npm run build
```

### Admin Panel
```bash
cd admin
npm run build
```

## 🔒 Security Considerations

- Keep your `.env` file secure and never commit it to version control
- Use strong JWT secrets in production
- Use HTTPS in production
- Regularly update dependencies
- Validate all user inputs
- Use environment-specific configurations

## 🚀 Deployment

### Backend (Node.js)
- Deploy to services like Heroku, Railway, or DigitalOcean
- Set environment variables in your hosting platform
- Ensure MongoDB is accessible from your hosting environment

### Frontend & Admin
- Build the applications using `npm run build`
- Deploy to services like Vercel, Netlify, or any static hosting
- Update `VITE_BACKEND_URL` to point to your deployed backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Milan Sunar

## 🆘 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Ensure all environment variables are correctly set
3. Verify that all services (MongoDB, Cloudinary, Stripe) are properly configured
4. Check the console for any error messages

For additional help, please open an issue in the repository.