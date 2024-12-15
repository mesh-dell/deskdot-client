# DeskDot Client

The **DeskDot Client** is the frontend for DeskDot, an e-commerce platform connecting stationery sellers and buyers. Built with React and styled using Tailwind CSS, it delivers a seamless and responsive user experience for managing products, orders, and accounts.

---

## Key Features

- **User Authentication**: Separate sign-up and login forms for buyers and sellers.  
- **Product Display**: Dynamic product grid with responsive design.  
- **Cart Management**: Add, view, and manage items in the cart.  
- **Order Tracking**: View order history and status updates.  
- **Seller Dashboard**: Manage product listings and track orders.  

---

## Tech Stack

- **Frontend Framework**: React  
- **Styling**: Tailwind CSS, Chakra UI Toast for notifications  
- **Routing**: React Router  
- **State Management**: Context API  
- **API Integration**: Axios for connecting to the DeskDot Server  

---

## Setup

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/mesh-dell/deskdot-client.git
   cd deskdot-client
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Configure environment variables** in `.env`:
   ```
   REACT_APP_API_URL=your_backend_api_url
   ```

4. **Start the development server**:  
   ```bash
   npm start
   ```

---

## Deployment

The client is deployed on **Vercel** for production. For local production builds:  
```bash
npm run build
```

---

## Key Pages

- **Home**: Browse products and view promotions.  
- **Product Details**: View detailed product information.  
- **Cart**: Manage selected items.  
- **Seller Dashboard**: Add, edit, or remove products and track orders.  

---
