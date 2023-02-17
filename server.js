const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./database')

const port = process.env.port || 5000 ;
app.listen(port);
app.use(cors())

app.use(express.json());

console.log('App is listening at port '+port);

//set response header
app.get('/', (req,res) => {
    res.statusCode = 200;
    console.log("get!!");
 res.send("hello!");
});

app.post('/user/login', (req, res) => {
  console.log(req);
    if(!req.body.username || !req.body.password){
      res.json({ success:false, error:"Send the parameters" });
      return;
    }  
    db.User.findOne({username:req.body.username}).then((user)=>{
      if(!user){
        res.json({ success:false, error:"User does not exist" });
      }
      else {
        if(user.password != req.body.password){
          res.json({ success:false, error:"password not correct" });
        }
        else{
          res.json({ success:true, username:user.username,role:user.role });
        }
  
      }
    }).catch((err)=>{
      res.json({ success:false, error:err });
    })
  });

//REST API - Representational State Transfer
//CRUD Operations


//const url = `mongodb+srv://student:kmit123@cluster0.mwifk43.mongodb.net/himalayas?retryWrites=true&w=majority`;
