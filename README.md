# My Node Practice

## Description

This is a Node.js project demonstrating server setup with MongoDB, JWT authentication, and email functionality.

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
# MongoDB connection URL
mongo_url=your_mongodb_connection_url

# Server port
port=3000

# Email credentials
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# JWT secret key
JWT_SECRET=your_jwt_secret_key

Important: Do NOT commit your .env file to GitHub. Make sure .gitignore includes .env.

Installation


Clone the repository:


git clone https://github.com/baskaranselvaraju/my-node-practice.git
cd my-node-practice



Install dependencies:


npm install


Running the Server


Start the server:


npm start



For development with automatic restart using nodemon:


npm run dev


Notes


Make sure MongoDB is running locally or update mongo_url in .env accordingly.


Replace the placeholders in .env with your actual configuration.


Keep sensitive data out of GitHub by using .gitignore.



License
This project is licensed under the MIT License.

