const express=require('express')
const mongoose=require('mongoose')
const homeRouterRoutes=require('./routes/homeRoutes')
const exphbs=require('express-handlebars');
mongoose.connect("mongodb+srv://charleeblaq:@cluster0.nh33n48.mongodb.net/my_todo_appDB")

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.engine('hbs',exphbs.engine({
    extname: '.hbs', defaultLayout: 'main', runtimeOptions: {
        allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true
    }
}))
app.set('view engine', 'hbs');

app.use("/",homeRouterRoutes)



app.listen(process.env.PORT || 3010)
