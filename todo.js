const express=require('express');
const dotenv= require('dotenv').config()
const mongoose=require('mongoose');
const homeRouterRoutes=require('./routes/homeRoutes');
const exphbs=require('express-handlebars');


mongoose.connect(process.env.MONGO_DB_CONNECT)

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
