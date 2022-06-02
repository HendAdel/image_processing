// import the express to build the server
import express = require('express');
import routes from './routes/img_rout';



const app = express();

const port = 3000;

//Use routes
app.use('/api', routes);

// resize image endpoint function


// start server function
app.listen(port, ()=>{
    console.log(`The server runing at localhost: ${port}`);
})


export default app