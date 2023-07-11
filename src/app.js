const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./db/conn")
const Register = require("./models/registers");
const port  = process.env.PORT || 3000;

const static_path = path.join(__dirname ,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set('view engine','hbs'); 
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get("",(req,res)=>{
    res.render("index");
});  

app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});

// Handle form submission
app.post("/index",(req,res) =>{
    const {firstname,lastname,email,description} = req.body;

    const register = new Register({
       firstname,
       lastname,
       email,
       description
    });
    register.save()
    .then(()=>{
        res.render("success"); 
    })
      .catch((error) => {
        res.render("error");
    });
    
  
});
app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
});