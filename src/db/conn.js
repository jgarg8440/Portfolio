const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jgarg8440:t9Uz2SNEqapdmwLf@cluster0.ybnd1gg.mongodb.net/?retryWrites=true&w=majority").then(() =>{
    console.log(`Connection successful`);
}).catch((e) =>{
    console.log(`no connection`);
})