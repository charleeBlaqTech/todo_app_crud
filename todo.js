const express=require('express')
const fs=require('fs')
const mongoose=require('mongoose')
const homeRouterRoutes=require('./routes/homeRoutes')
const exphbs=require('express-handlebars');
const dotenv=require('dotenv');
dotenv.config()

mongoose.connect(process.env.mongoose_CONNECT).then(()=>{
    console.log('DB CONNECTED SUCCESSFULLY')
}).catch((err)=>{
    console.log('error')
})

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