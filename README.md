💰 FinTrack: Personal Income & Expense Tracker

**Project Overview**

FinTrack is a full-stack, single-page application designed to help users manage, visualize, and track their personal income and expenses. Built with the MERN stack, it offers secure user authentication, real-time data visualization, and tools for financial analysis.

The application adheres to modern best practices, utilizing stateless JWT authentication and a component-driven architecture in React.

🌟 Features

- **User Authentication (JWT):** Secure registration and login flow with JSON Web Tokens (JWT) stored in Local Storage.

- **Income Management:** Add, view, and list income transactions with source, amount, and date.

- **Expense Management:** Add, view, and list expense transactions with category, amount, and date.

- **Dynamic Dashboard:** Real-time financial overview displaying total balance, total income, and total expenses.

- **Data Visualization (Recharts):** Interactive charts showing income trends (e.g., last 60 days) and expense breakdowns (e.g., last 30 days).

- **Responsive UI:** A modern, mobile-friendly dashboard layout with a fixed sidebar (powered by Tailwind CSS).

- **Data Export:** Download income and expense reports as Excel files (using the xlsx library).

**🚀 Technology Stack**


**Frontend**

1. React, React Router, Tailwind CSS

2. UI, Routing, and Component Management

3. Recharts Library

4. Rendering dynamic Bar Charts and Pie Charts

5. React Context API

6. Global user authentication state (UserContext)

**Backend**

1. Node.js, Express.js

2. API server and routing

3. MongoDB, Mongoose



**Authentication**

1. JWT (JSON Web Tokens)

2. Stateless authentication and authorization

**File Handling**

1. Multer, xlsx

2. Handling image uploads and Excel data export

**⚙️ Setup and Installation**
--------------------------------
**
Prerequisites**

To run this project locally, ensure you have the following installed:

Node.js (v18+)

MongoDB Instance (Local or Atlas)

Git

**1. Backend Setup**

Clone the repository:

git clone <repo_url>


Navigate to the server directory (e.g., cd server):

Install dependencies:

npm install


Create a .env file in the root directory and add your connection strings:

PORT=8000
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="YOUR_STRONG_SECRET_KEY"


Start the server:

npm start
# or
node server.js


The API server will run on http://localhost:8000.

**2. Frontend Setup**

Navigate to the client directory (e.g., cd client):

Install dependencies:

npm install


Start the development server:

npm run dev
# or
npm start


The frontend will run on http://localhost:5173 (or similar).

**⚠️ Key Architectural Notes**

1. CORS Configuration

The Express server is configured to handle Cross-Origin Resource Sharing (CORS) correctly, explicitly allowing the client application's development port (http://localhost:5173) to make secure requests to the API.

2. Preventing Infinite Render Loops

To maintain high performance and avoid the common "Maximum update depth exceeded" error (often encountered when integrating Recharts), several components use the useMemo hook:

FinanceOverview.jsx

RecentIncomeWithChart.jsx

Last30daysExpenses.jsx

This ensures chart data is only recalculated and updated when the raw transaction data changes, stabilizing the entire dashboard rendering cycle.

3. Protected Routes

All sensitive API routes (/api/v1/income, /api/v1/expense, etc.) are protected using an Express middleware (protect) that verifies the validity and signature of the incoming JWT.
