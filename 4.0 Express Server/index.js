import express from "express";
const app = express();
const port = 3000;
//Mock data to be replaced with actual data
let posts = [
  { id: 1, title: "Post 1", content: "Content of Post 1" },
  { id: 2, title: "Post 2", content: "Content of Post 2" },
  //More posts can be added here as the case may be or as needed
];
let nextPostId = 3; //used to assign unque IDs to new posts

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Render the home page with the form
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

// Handle the form submission
app.post("/create-post", (req, res) => {
  const { title, content } = req.body;
  //Above uses destructuring to achive same result as :
  //const title = req.body.title; or const title = req.body[title]
  //const content = req.body.content; or const content = req.body.[content]

  // Save the post data (you can store it in an array, a database, etc.)
  const newPost = { id: nextPostId, title: title, content: content };
  posts.push(newPost);
  nextPostId++;

  posts.push(newPost);

  // Redirect to the home page or display a success message

  res.redirect("/");
});
// Route to render the edit post form
app.get("/edit-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postToEdit = posts.find((post) => post.id === postId);
  res.render("edit-post", { post: postToEdit });
});
// Route to handle updating a post
app.post("/edit-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;

  // Update the post
  const updatedPostIndex = posts.findIndex((post) => post.id === postId);
  posts[updatedPostIndex].title = updatedTitle;
  posts[updatedPostIndex].content = updatedContent;

  res.redirect("/");
});
// Route to handle deleting a post
app.get("/delete-post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== postId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
