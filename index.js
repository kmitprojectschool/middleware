const express = require("express");
const cors = require('cors')

//const jwt = require('jsonwebtoken');
//const bodyparser = require('body-parser');
const db = require('./database')
const jwt_code = "kmit123";

const app = express();
//app.use(cors);


app.options("*", cors({ origin: 'https://reactdemo-phi.vercel.app/', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "https://reactdemo-phi.vercel.app/", optionsSuccessStatus: 200 }));

const auth = require("./auth");
const port = process.env.PORT||4000

app.use(express.json());
//app.use(bodyparser);

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World" });
});

app.get("/data", async (req, res) => {
    //logic
    
    return res.json({ message: "Hello, Data" });
  });


const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start()
