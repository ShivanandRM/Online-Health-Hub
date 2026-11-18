# Online Health Hub – Doctor Appointment Booking Platform

A full-stack doctor appointment booking platform that connects patients with doctors and provides tools for appointment management through patient, doctor, and admin interfaces.

## Project Overview

Online Health Hub is a web-based healthcare appointment management system designed to simplify the process of finding doctors, booking appointments, and managing healthcare services.

The project contains three applications:

- **Patient Frontend** – Browse doctors, explore specialties, manage profiles, and book appointments.
- **Backend API** – Handles authentication, doctor management, appointment operations, and database communication.
- **Admin Dashboard** – Allows administrators to manage doctors, appointments, and platform operations.

## Architecture

```text
Online-Health-Hub
│
├── frontend/       # Patient-facing React application
├── backend/        # Node.js + Express REST API
└── admin/          # Admin & doctor dashboard
```

## Tech Stack

### Frontend
- React.js
- JavaScript
- Vite
- CSS
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- REST API
- JWT Authentication

### Admin Dashboard
- React.js
- Vite
- Tailwind CSS

## Key Features

- Patient registration and login
- Doctor discovery and specialty filtering
- Doctor profile viewing
- Appointment booking and management
- Patient profile management
- Doctor dashboard
- Admin dashboard
- Doctor management
- Appointment administration
- Authentication and protected routes
- Online payment integration support

## Project Structure

```text
Online-Health-Hub/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ShivanandRM/Online-Health-Hub.git
cd Online-Health-Hub
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Configure your environment variables using a `.env` file.

### 3. Run the backend

```bash
npm run server
```

### 4. Install and run the patient frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 5. Install and run the admin dashboard

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

## Environment Configuration

Create the necessary `.env` files locally for each application.

Never commit credentials, database connection strings, API keys, or authentication secrets.

## Future Improvements

- Improve application security
- Enhance responsive design
- Improve API error handling and validation
- Add advanced doctor search and filtering
- Improve deployment and production configuration
- Add automated testing

## Contributors

This project was developed as a collaborative project. See the repository history and project contributions for details.

## Author

**Shivanand Mugali**

GitHub: [ShivanandRM](https://github.com/ShivanandRM)
