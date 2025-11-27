const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fullName = "Your Full Name";
const section = "Your Class Section";
const quote = "Your Inspirational Quote";

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; font-family: Arial, sans-serif; margin-top: 50px;">
      <h1>${fullName}</h1>
      <h2>${section}</h2>
      <p>${quote}</p>
    </div>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 