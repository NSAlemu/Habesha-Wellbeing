const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

const uri = process.env.mongokey+"?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("errpr at sidenav\n"+err));


const sidenavSchema = new mongoose.Schema({
  header: String,
  link: String,
  Subheaders: [[String]]
});
const Sidenav = mongoose.model("SideNav", sidenavSchema);


// Get Posts
router.get('/', (req, res) => {
  Sidenav.find({}, function(err, side) {
    res.send(side);
  });
});
router.post('/', (req, res) => {
  const body = req.body;
  saveSidenavItem(body);

  res.send(body);


});

function saveSidenavItem(Obj) {
  const sidenavItem = new Sidenav({
    header: Obj.header,
    link: Obj.link,
    subheaders: Obj.subheaders
  });
  sidenavItem.save();
  return sidenavItem;
}


module.exports = router;
