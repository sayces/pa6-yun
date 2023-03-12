const uuid = require('uuid')
const path = require('path')
const mysql = require('mysql')

const ApiError = require('../error/ApiError')
const {GalleryPost, PostInfo} = require('../models/models')


class GalleryPostController {
  async addPost(req, res, next) {
    try {
      const {name, description, author} = req.body
      const {created_at} = new Date();
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const post = await GalleryPost.create({name, description, author, created_at, img: fileName})
      return res.json(post) 

    } catch(e) {
      next(ApiError.err404(e.message))
    }
  }
  
  async deletePost(req, res) {
    try {

    } catch(e) {
      next(ApiError.err404(e.message))
    }  
  }

  async updatePost(req, res) {
      
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
      where: {id},
      // include: [{img: GalleryPost, as: 'img'}]
    }
    )

  }


  


}

module.exports = new GalleryPostController()