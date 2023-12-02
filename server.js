const express = require('express');
const path=require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

//Server side rendering using ejs
app.set("view engine","ejs");
app.set('views',path.resolve("./views"));


//http requests to handle get and post requests
app.get('/',(req,res)=>{
  return res.render('index');
})


//exposing the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
