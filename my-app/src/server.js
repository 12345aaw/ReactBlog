const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/reactblog');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  tag: Array,
  posted: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'post',
});

let PostModel = mongoose.model('PostModel', PostSchema);

app.post('/api/blogpost', createPost);
app.get('/api/blogpost', getAllPosts);


function createPost(req, res) {
  const post = req.body;
  console.log(post);
  PostModel
    .create(post)
    .then(function (postObj) {
      res.json(200);
    },
    function(error) {
      res.sendStatus(400);
    }
    );
}

module.exports = mongoose.model('Post', PostSchema);

app.listen(3000);
