# Expense Tracker

This is a full-stack web application designed to help users track their income and expenses. The application includes user authentication, transaction management, and a responsive user interface.

---

## Features

- User registration and login with JWT-based authentication.
- Add, view, and manage income and expense transactions.
- Secure storage of user data in a MySQL database.
- Responsive frontend interface using HTML, CSS, and JavaScript.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
$ git clone https://github.com/yourusername/expense-tracker.git
$ cd expense-tracker
```

### 2. Set Up the Backend

#### Navigate to the `backend` directory:
```bash
$ cd backend
```

#### Install Dependencies:
```bash
$ npm install
```

#### Configure Environment Variables:
Create a `.env` file in the `backend` directory with the following content:
```env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=expense_tracker
JWT_SECRET=your_secret_key
PORT=3000
```

#### Import Database Schema:
Run the following command to create the database and tables:
```bash
$ mysql -u your_mysql_user -p < database.sql
```

#### Start the Backend Server:
```bash
$ npm start
```
The backend server will be available at `http://localhost:3000`.

### 3. Set Up the Frontend

Navigate to the `frontend` directory:
```bash
$ cd ../frontend
```

You can now open the HTML files (`index.html`, `login.html`, and `dashboard.html`) directly in your browser or serve them using a local development server (e.g., Live Server in VS Code).

---

## Usage

1. Open `index.html` in your browser.
2. Register or log in with your credentials.
3. Use the dashboard to manage your transactions.