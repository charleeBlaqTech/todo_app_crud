const mongoose=require('mongoose')
const NewTodo=require('../models/todosSchema')

const homeGet=async (req,res)=>{
    try {
        const allTodos=await NewTodo.find({})
        res.render('home',{allTodos})
    } catch (error) {
        res.json({message:"no todo found", error:error})
    }
    
   
}

const homePost=async (req,res)=>{
    try {
        await NewTodo.create({
            text:req.body.title
        })
        res.redirect('/')
    } catch (error) {
        res.json({message:"todo not deleted", error:error})
    }
    
   
}

const homeDelete=async (req,res)=>{
    try {
        const todoID=req.params.id
        await NewTodo.findByIdAndDelete(todoID)
        res.redirect('/')
    } catch (error) {
        res.json({message:"todo not added", error:error})
    }
    
   
}


module.exports={homePost,homeGet,homeDelete}