import express, {Request, Response, Router} from 'express';
import assist from '../controllers/assist';
import path from 'node:path';

const resize = express.Router();

let image_name = "";
let image_ext = "";
let name_w_ext = "";
let n_img_w = 0;
let n_img_h = 0;
//TODO: fix images pathes with path packge
let o_img_path = path.resolve(__dirname, '..','..','..','images','original-images'); //o_img_path = "../../image_processing/image_processing_back-end/images/original-images";
let t_img_path = path.resolve(__dirname, '..','..','..','images','thumbnail'); //"/images/thumbnail";

 resize.get('/', async (req: Request, res: Response): Promise<void> => { 
    res.status(200);
    // console.log(path.parse("D:/Udacity/WD_Fullstack/Tries/image_processing/image_processing_back-end/images/original-images/fjord.jpg"));
    image_name = ((req.query.image_name as unknown) as string);
    if(!image_name){
        res.status(400).send('Bad request The Image name is required!');
    }
    image_ext = path.extname(image_name);
    name_w_ext = path.parse(image_name).name;
    console.log(image_name);
    console.log(o_img_path);

    n_img_w = parseInt((req.query.width as unknown) as string);
    if(!n_img_w){
        res.status(400).send('Bad request The Image new width is required!');
    }
    n_img_h = parseInt((req.query.hight as unknown) as string);
    if(!n_img_h){
        res.status(400).send('Bad request The Image new hight is required!');
    }
    let o_fullname = o_img_path + '/' + image_name;
    console.log(o_fullname);
    let n_fullname = '';
    assist.file_exist(o_fullname);

    if(assist.file_exist(o_fullname) === true){
        if(assist.valid_width(n_img_w, n_img_h) === true){
            n_fullname = path.resolve(t_img_path + '/' + name_w_ext + '_' + n_img_w + '_' + n_img_h + image_ext);
            console.log(`new image path & name: ${n_fullname}`);
            // n_fullname = t_img_path + '/' + image_name + '_' + n_img_w + '_' + n_img_h + '.jpg';
            // n_fullname = image_name + '_' + n_img_w + '_' + n_img_h + '.jpg';
            if(assist.file_exist(n_fullname) === true){
                console.log("image exist with same dimensions!");
                // send the exist image
                // res.sendFile(__dirname + n_fullname); 
                res.sendFile(n_fullname);   
            }
            else{
                //TODO: resize the image with new dimensions, and send it.
                console.log(`file name: ${o_fullname}`);
                console.log(`file width: ${n_img_w}`);
                console.log(`file hight: ${n_img_h}`);
                console.log(`new file path : ${n_fullname}`);
                try {
                    await assist.resize_image(o_fullname, n_img_w,n_img_h,n_fullname);
                console.log(n_fullname);
                // res.sendFile(n_fullname, { root: __dirname });
                
                res.sendFile(n_fullname);
                } catch (error) {
                    throw new Error(`Cannot get the new image, Please try again later! ${error}`);
                }
                
            }
        }
        else{
            console.log("invalid dimensions!");
            res.send("Please enter a valid dimensions!");   
        }
    }
    else{
        console.log("invalid Image!");
        res.send("Please choose a valid Image!");
    }
    

});

export default resize;