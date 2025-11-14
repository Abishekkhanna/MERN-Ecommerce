# 📅 Daily Progress Log

This file tracks my daily MERN learning progress while building the E-Commerce project.

---

## ✅ Day 1

**Basic Initial Setup**

- Installed Visual Studio Code
- Installed Node.js
- Installed MongoDB
- Installed Postman
- Installed required VS Code extensions
- Created project folder structure

---

## ✅ Day 2

**JavaScript Revision – Arrays**

- Recalled array basics
- Practiced common array methods (map, filter, reduce, find, push, pop, etc.)

---

## ✅ Day 3

**JavaScript Revision – Objects**

- Recalled object creation & access methods
- Practiced object destructuring
- Worked on nested objects

---

## ✅ Day 4

**Modules**

- Learned `import` and `export` syntax
- Understood default vs named exports
- Used ES modules in simple examples

---

## ✅ Day 5

**Async JavaScript & API Calls**

- Learned how **async/await** works
- Fetched data from online API using 3 methods:
  - `XMLHttpRequest`
  - Promises
  - `fetch()`
  - Axios
  - link : [API Calls Repo](https://github.com/Abishekkhanna/api-request-methods)

---

## ✅ Day 6

**Backend Initialization**

- Ran `npm init` to start Node project
- Installed Express.js
- Created basic server in `app.js`
- Used Nodemon to auto-restart server
- Setup `.env` file for configuration
- Created first API endpoint
- Tested endpoint using Postman
- Cleaned code by separating:
  - Router
  - Controller

---

## ✅ Day 7

**MongoDB Setup + Product Model**

- Installed and setup MongoDB connection
- Connected the backend to MongoDB using Mongoose
- Created the Product Schema (Model)
- Wrote the controller function for `addProduct`
- Added POST route to handle adding new products
- Applied middleware to parse all incoming requests as JSON
- Used the Mongoose `.create()` method to insert product data into the database
- Tested the API using Postman and verified product saved successfully

---

## ✅ Day 8

**Product CRUD Operations**

- Created the controller function for `getAllProducts` using `.find()`
- Built `getSingleProduct` using `.findById()`
- Implemented `updateProduct` using `.findByIdAndUpdate()`
- Added `deleteProduct` using `.findByIdAndDelete()`
- Tested all CRUD routes in Postman to ensure each endpoint works correctly

---

## ✅ Day 9

**Error Handling Setup**

- Created a custom `HandleError` class that extends the default JavaScript `Error`
- Added a global error-handling middleware to manage all API errors
- Replaced old “Product Not Found” messages with the new custom error handler
- Implemented `unhandledRejection` handling in `server.js`
- Implemented `uncaughtException` handling in `server.js` to prevent server crashes
- Tested all routes to ensure errors are thrown and formatted correctly

---

(Continue updating daily…)
