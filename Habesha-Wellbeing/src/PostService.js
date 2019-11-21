import axios from 'axios'
const url = 'http://localhost:3000/api/posts'

class PostService {
  // get Posts
  static getPosts () {
    var posts;
    axios
      .get('http://localhost:3000/api/posts')
      .then(response => (this.posts = response.data));
  }

  // create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    })
  }
}

export default PostService
