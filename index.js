const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully on Render!");
});

// Sample API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend 👋",
    status: "success"
  });
});

// IMPORTANT: use process.env.PORT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
