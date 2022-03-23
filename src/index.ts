// import the express to build the server
import express = require('express');
//call sharp tool to resize image
const sharp = require('sharp');

const app = express();

const port = 3000;

// resize image endpoint function
app.get('/',(req, res) => {
    sharp(req)
  .resize(req.query.wdith, req.query.height, {
    kernel: sharp.kernel.nearest,
    fit: 'contain',
    position: 'right top',
    background: { r: 255, g: 255, b: 255, alpha: 0.5 }
  })
  .toFile(`${req.query.fname}.jpg`)
  .then(() => {
    
  });
    res.send("Image size changed!");
});

// start server function
app.listen(port, ()=>{
    console.log(`The server strted at localhost: ${port}`);
})


export default app