const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const shortid = require('shortid');
const dotenv = require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
console.log(process.env.mongokey+"?retryWrites=true&w=majority");
const uri = process.env.mongokey+"?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("errpr at posts\n"+err));


const postSchema = new mongoose.Schema({
  _id: String,
  title: String,
  author: String,
  post: String,
  showAuthor: String,
  createdAt: Date
});
const Post = mongoose.model("Post", postSchema);

// Get all Posts
router.get('/', (req, res) => {
  Post.find({}, function(err, postit) {
    if(err){
      res.send(err.message);
    }
    else{
      res.send(postit);
    }

  });
});
// Get Posts
router.get('/:postID', (req, res) => {
  Post.findById(req.params.postID, function(err, postit) {
    if(err){
      res.send(err.message);
    }
    else{
      res.send({"id":req.params.postID,"title":postit.title,"author":postit.author,"showAuthor":postit.showAuthor,"post":postit.post,"createdAt":postit.createdAt});
    }

  });
});
router.post('/', (req, res) => {
  const body = req.body;
  savePost(body);

  res.send({"saved":"true"});
});

function savePost(Obj) {
  const postItem = new Post({
    _id: shortid.generate(),
    title: Obj.title,
    author: Obj.author,
    post: Obj.post,
    showAuthor: Obj.showAuthor,
    createdAt: new Date()
  });
  postItem.save();
  return postItem;
}


module.exports = router;
