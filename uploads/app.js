const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();


app.use("/uploads", express.static(path.resolve("./")));



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});