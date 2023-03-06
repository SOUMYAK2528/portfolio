// npm modules 
const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
//express alias app
const app =express()
//express use 
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static("public"));

//get and post request to root route
app.get("/",(req,res)=>{
    res.render("intro",{});
})

app.post("/",(req,res)=>{

})
//get and post route for contact page
app.get("/contact",(req,res)=>{
    res.render("contact",{});
})
 







app.listen(process.env.PORT || 3000,()=> {
    console.log("you are currently on localhost:3000");
});

