import axios from 'axios'
const url = '/api/sidenav'

class SidenavService {
  // get Posts
  static getPost () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(data.map(post => ({
          ...post,
          createdAt: new Date(post.createdAt)
        })))
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default SidenavService
