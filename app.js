const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use("/api/employees", usersRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
