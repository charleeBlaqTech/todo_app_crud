const mongoose=require('mongoose')
const Schema= mongoose.Schema

const todosSchema= new Schema({
    text:String 
})

const todosModel=new mongoose.model('todo', todosSchema);

module.exports=todosModel;
