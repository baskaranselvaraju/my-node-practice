# My Node Practice

## Description

This is a Node.js project demonstrating server setup with MongoDB, JWT authentication, and email functionality.

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
# MongoDB connection URL
mongo_url=mongodb://localhost:27017/demo1

# Server port
port=3000

# Email credentials
EMAIL_USER=sujikar20133239@gmail.com
EMAIL_PASS=jieq zdhx fvdn uqqn

# JWT secret key
JWT_SECRET=FD2A7D19774CB929448547B61BFFC
```

Important: Do NOT commit your .env file to GitHub. Make sure .gitignore includes .env.

Installation


Clone the repository:

```
git clone https://github.com/baskaranselvaraju/my-node-practice.git
cd my-node-practice
```


Install dependencies:

```
npm install
```

Running the Server


Start the server:

```
npm start
```


For development with automatic restart using nodemon:

```
npm run dev
```

Notes


Make sure MongoDB is running locally or update mongo_url in .env accordingly.


Replace the placeholders in .env with your actual configuration.


Keep sensitive data out of GitHub by using .gitignore.



License
This project is licensed under the MIT License.

