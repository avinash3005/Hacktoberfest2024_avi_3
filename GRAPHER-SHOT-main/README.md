---

# Photographer Website Project

This project is a static website for a photographer built with React (frontend) and Node.js (backend). It includes a mail feature for users to contact the owner to request more pricing information.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js (with Nodemailer for email functionality)

## Features
- Static website showcasing the photographer's work.
- Contact form for visitors to request more pricing information.
- Email notifications sent directly to the owner's inbox.

---

## Installation Guide

### 1. Clone the Repository

### 2. Install Dependencies

#### Frontend (React)
```bash
cd client
npm install
```

#### Backend (Node.js)
```bash
cd ../server
npm install
```

### 3. Create Environment Variables

1. In the `backend` folder, create a `.env` file by copying `.env.example`:
```bash
cp .env.example .env
```

2. Add your credentials and values to the `.env` file:
```env
EMAIL_USER=youremai@email.com
EMAIL_PASS=YOUR_APP_PASSWORD
TO_EMAIL=youremai@email.com
PORT=YOUR_PORT
```

### 4. Update Configuration

#### Frontend

In the `frontend/src/components/FormComponent.js` (or similar):
Update the `fetch` URL to match your backend URL or port

#### Backend

In `backend/server.js` (or similar), update the CORS origin to match your frontend URL:
```javascript
origin: 'http://localhost:5173', // Update with your React frontend URL
```

### 5. Run the Project

#### Frontend (React)
```bash
cd client
npm run dev
```

#### Backend (Node.js)
```bash
cd server
node server.js
```

### 6. Access the Website

- Open your browser and visit your React app .
- Ensure that the backend is running.

---

## Contact

If you encounter any issues or have questions, feel free to contact the project owner at imeshnirmal1u@gmail.com.

---
