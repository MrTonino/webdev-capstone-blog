import express from "express";
const app = express();
const port = 3000;

// Set up middleware and routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
