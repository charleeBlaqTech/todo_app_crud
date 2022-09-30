const mongoose=require('mongoose')
const Schema= mongoose.Schema

const todosSchema= new Schema({
    text:String,
    required:true
    
})

const todosModel=new mongoose.model('todo', todosSchema);

module.exports=todosModel;
