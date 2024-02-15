const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../../models/db");

async function login(req, res) {
  const { username, password } = req.body;

  // Query the database for the user
  db.query(
    "SELECT * FROM admin WHERE username = ?",
    [username],
    (error, results) => {
      if (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
      }

      // If user not found or password incorrect, return error
      if (
        results.length === 0 ||
        !bcrypt.compareSync(password, results[0].password)
      ) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: results[0].id, username: results[0].username },
        "your_secret_key"
      );

      // Send token as response
      res.json({ token });
    }
  );
}

async function register(req, res) {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM admin WHERE username = ?",
        [username],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    })
      .then(([existingUsers]) => {
        if (existingUsers && existingUsers.length > 0) {
          return res.status(400).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Insert the new user into the database
        db.query(
          "INSERT INTO admin (username, password) VALUES (?, ?)",
          [username, hashedPassword],
          (error) => {
            if (error) {
              console.error("Error inserting new user:", error);
              res.status(500).json({ message: "Internal server error" });
            } else {
              res.status(201).json({ message: "User registered successfully" });
            }
          }
        );
      })
      .catch((error) => {
        console.error("Error checking existing users:", error);
        res.status(500).json({ message: "Internal server error" });
      });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access token required" });

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

module.exports = {
  login,
  register,
  authenticateToken,
};
