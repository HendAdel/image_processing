import express = require('express');
const app = express();

const port = 3000;

app.get('/',(req, res) => {
    res.send("Hi the server response!");
});

app.listen(port, ()=>{
    console.log(`The server strted at localhost: ${port}`);
})

export default app