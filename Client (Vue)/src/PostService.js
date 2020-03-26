import axios from 'axios'

const url = '/api/Posts/'

class PostService {
  // get Posts
  static getPost(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + id);
        const data = res.data

        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  }

  static getAllPost() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        })))
      } catch (err) {
        reject(err)
      }
    })
  }


  static savePost(newPost) {
    var res = "";
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url, newPost);
        const data = res.data.saved;
        resolve(data)

      } catch (err) {
        reject(err)
      }
    })
  }

  static deletePost(id) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('PostService data' + url + id);

        const res = await axios.delete(url + id);
        const data = res.data.saved;
        resolve(data)

      } catch (err) {
        reject(err)
      }
    })
  }

  static updatePost(id, post) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('PostService data' + url + id + post);

        const res = await axios.put(url + id, post);
        const data = res.data.saved;
        resolve(data)

      } catch (err) {
        reject(err)
      }
    })
  }
}


export default PostService
