import express from 'express';
import assist from '../controllers/assist';

const resize = express.Router();

let image_name = "";
let n_img_w = 0;
let n_img_h = 0;
const o_img_path = "../../images/original-images";
const t_img_path = "../../images/thumbnail";

resize.get('/', (req, res) => { 
    image_name = ((req.query.image_name as unknown) as string);
    let fullname = o_img_path + image_name;
    if(assist.file_exist(fullname) === true){

    }
    else{
        console.log("invalid Image!");
        res.send("Please choose a valid Image!");
    }
    

});

export default resize;