import express from 'express';
import resize from './api/resize-image'  ;

const routes = express.Router();

routes.get('/', (req, res) => { console.log("Hallo from images rout")
res.send("Image rout!");
});

routes.use('/resize', resize);
export default routes;