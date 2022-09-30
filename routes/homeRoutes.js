const express=require('express')
const router=express.Router();
const {homeGet,homePost,homeDelete}=require('../controllers/homeController')




router.route('/').get(homeGet).post(homePost)

router.get('/delete-Todo/:id',homeDelete)

module.exports=router