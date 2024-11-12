const express = require('express');
const cors = require('cors');
const registrationRoutes = require('./routes/registrationRoutes'); // Adjust path if needed

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in body-parser replacement

// Register routes
app.use('/api', registrationRoutes); 

// Server
const PORT =3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
