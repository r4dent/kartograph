const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});