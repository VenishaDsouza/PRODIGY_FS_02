# StaffSync – Employee Management System

StaffSync is a full-stack web application designed to simplify employee data management. Built using Node.js, Express, MongoDB, and EJS, it enables secure authentication, dynamic dashboards, and complete CRUD functionality — all wrapped in a clean, responsive UI.

## Features
- Admin login with session-based authentication
- CRUD operations for employee data
- Sidebar toggle and mobile-responsive layout

## Tech Stack
- **Frontend:** HTML5, CSS3, Bootstrap 5, EJS templates  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** express-session, cookie-parser  
- **Version Control:** Git & GitHub

## Setup Instructions

### 1. Clone this repository 
```bash
git clone https://github.com/VenishaDsouza/PRODIGY_FS_02
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Set up Environmental Variables 
Create a .env file inside server/ with: 
```bash
MONGODB_URI=your-mongo-db-url 
JWT_SECRET=your-secret-key 
```

### 4. Run Your Backend Server 
```bash
npm start
```
Visit: http://localhost:8000/auth/login
