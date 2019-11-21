const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cors());

const posts = require('./routes/api/posts');
const sidenav = require('./routes/api/sidenav');
app.use("/api/posts", posts);
app.use("/api/sidenav", sidenav);

app.get("/", async (req, res) => {
  //const posts = await loadPosts();
  res.send("");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
