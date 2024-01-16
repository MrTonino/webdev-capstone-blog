import express from "express";
const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Render the home page with the form
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Handle the form submission
app.post("/create-post", (req, res) => {
  const { title, content } = req.body;

  // Save the post data (you can store it in an array, a database, etc.)
  const newPost = {
    title: title,
    content: content,
  };

  // Create an array to store posts, then
  // posts.push(newPost);

  // Redirect to the home page or display a success message
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
