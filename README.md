# Registration System

This is a simple registration system with a backend built using Express and MySQL, and a frontend built with Next.js. The system allows users to register, view, update, and delete registration details. The backend handles the CRUD operations, while the frontend provides a user interface to interact with the API.

## Features

- **Create a Registration**: Users can register with their name, email, date of birth, phone number, and address.
- **View Registrations**: View all registrations.
- **Update Registration**: Update registration details by ID.
- **Delete Registration**: Delete a registration by ID.

## Setup Instructions

### 1. Backend Setup (Express + MySQL)

1. **Install MySQL**: Ensure that MySQL is installed and running on your local machine.

   - [Download MySQL](https://dev.mysql.com/downloads/installer/)

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/ayush-sharaf/ini8.git
   cd ini8
   ```

3. **Install Backend Dependencies**:
   Navigate to the `backend` directory and run the following command to install required packages:

   ```bash
   cd backend
   npm install
   ```

4. **Setup MySQL Database**:

   - Create a database named `regi` in MySQL (or update the database name in `backend/config/db.js`).
   - Run the following SQL query to create the `Registration` table:

   ```sql
   CREATE TABLE Registration (
     ID INT AUTO_INCREMENT PRIMARY KEY,
     Name VARCHAR(100),
     Email VARCHAR(100),
     DateOfBirth DATE,
     PhoneNumber VARCHAR(15),
     Address TEXT
   );
   ```

5. **Start the Backend Server**:
   After installing the dependencies and setting up the database, start the backend server:
   ```bash
   node app.js
   ```
   The backend server will run on [http://localhost:3001](http://localhost:3001).

### 2. Frontend Setup (Next.js)

1. **Navigate to the Frontend Directory**:

   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies**:
   Run the following command to install the required packages for the frontend:

   ```bash
   npm install
   ```

3. **Start the Frontend Server**:
   After installing the dependencies, run the following command to start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend server will run on [http://localhost:3000](http://localhost:3000).

### 3. Using the Application

Once both servers are running, you can access the application by visiting the frontend URL:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:3001/api](http://localhost:3001/api)

From the frontend, you can:

- **Create a registration** by entering the required fields and submitting the form.
- **View all registrations** by fetching the list from the backend.
- **Update** an existing registration by clicking the "Edit" button next to the registration entry.
- **Delete** a registration by clicking the "Delete" button.

### 4. Testing the API

You can also test the backend API using tools like Postman or Insomnia:

- **Create** a new registration: `POST http://localhost:3001/api/register`
- **Get all registrations**: `GET http://localhost:3001/api/register`
- **Update a registration**: `PUT http://localhost:3001/api/register/:id`
- **Delete a registration**: `DELETE http://localhost:3001/api/register/:id`

### 5. Directory Structure

```
/backend
  /controllers
    registrationController.js
  /routes
    registrationRoutes.js
  /config
    db.js
  app.js
  package.json
/frontend
  /pages
    index.js
  /api
    api.js
  package.json
README.md
```

### 6. Troubleshooting

- **CORS Issues**: If you encounter CORS issues, ensure that the frontend is correctly accessing the backend by checking the `BASE_URL` in `frontend/api.js`.
- **Database Connection Issues**: Ensure that your MySQL service is running and that the database is set up correctly in the `backend/config/db.js`.

### 7. Future Improvements

- Implement validation for user input in both frontend and backend.
- Use environment variables for better security and flexibility (e.g., for database credentials).
- Add pagination for viewing registrations.
- Implement authentication and authorization.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
