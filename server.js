const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fullName = "Dominic I Malpica";
const section = "BSIT SM 4102";
const quote = "and ligid an tiil ng shark and kanding";

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