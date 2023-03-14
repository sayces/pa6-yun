const uuid = require('uuid')
const path = require('path')


const ApiError = require('../error/ApiError')
const {GalleryPost, User} = require('../models/models')


class GalleryPostController {
  async add(req, res, next) {
    try {
      let {title, description} = req.body
      const {created_at} = new Date();
      const {img} = req.files
      let fileName = img.name
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const post = await GalleryPost.create({title, description, created_at, img: fileName})

      // if(author) {
      //   author = JSON.parse(author)
      //   author.forEach(i => 
      //     GalleryPost.create({
      //       title: i.title,
      //       description: i.description,
      //       userId: User.id
      //     }))
      // }

   

      
      return res.json(post) 

    } catch(e) {
      next(ApiError.err404(e.message))
    }
  }
  
  async delete(req, res) {
    try {

    } catch(e) {
      next(ApiError.err404(e.message))
    }  
  }

  async update(req, res) {
      
  }

  
  
  async posts(req, res) {
    let {page, limit} = req.query
    page = page || 1
    limit = limit || 5
    let offset = page * limit - limit
    posts = await GalleryPost.findAndCountAll({ where: limit, offset})
    return res.json(posts)
    
  }
 
  async post(req, res) {
    const {id} = req.params
    const post = await GalleryPost.findOne(
    {
      where: {id}
    }
    )
    return res.json(post)
  }
}

module.exports = new GalleryPostController()