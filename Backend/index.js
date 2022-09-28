const express = require('express');
const bodyParser=require("body-parser")
const app = express();
const mongoose=require('mongoose')
const cors = require('cors')

app.use(cors());

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://ratneshnath:RATNESh99@cluster0.x9keh.mongodb.net/PandoDb?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
 
app.listen(5000,()=>{
console.log("app running on the port on 5000")
})
const userSchema = new mongoose.Schema({
    Fname:{type:String,require:true},
    Lname:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    phone:{type:Number,require:true},
    Address:{type:String,require:true},
})
// const loginSchema = new mongoose.Schema({
   
//     email:{type:String,require:true},
//     password:{type:String,require:true},
// })

var User = mongoose.model('riteshdata', userSchema);

app.use(bodyParser.urlencoded({extended:true}));

app.get('/hello',(req,res,)=>{
res.send("hello ritesh welcome to noida ")
})
app.post('/hello',(req,res,)=>{
res.send("From Server ")
})
app.post('/createUser',async (req,res)=>{
    let user1=req.body
    let user= await User.create(user1)
    res.status(200).send({status:true,msg:"data created successfully",data:user})


})
// app.post('/UserLogin',async (req,res)=>{
//      let email = req.body.email;
//     let password = req.body.password;
//     let user = await User.findOne({ email: email, password: password });
     

// })

 