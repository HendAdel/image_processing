import fs from 'fs';
//call sharp tool to resize image
const sharp = require('sharp');
import { readdir } from 'node:fs/promises';

// Check if the image exist. the file_name argument is the path + the image name ex"./images/thumbnail/fjord_200_200.jpg"
// async function file_exist(file_name: string): Promise<boolean>{
//     try {
//         const files = await readdir( "../../image_processing/image_processing_back-end/images/original-images");
//         for (const file of files)
//           console.log(file);
//       } catch (err) {
//         console.error(err);
//       }

//     console.log('assist: ' + file_name);
//     if(fs.existsSync(file_name)){
//         return true;
//     }
//     return false;
// }

function file_exist(file_name: string): boolean{
    
    console.log('assist: ' + file_name);
    if(fs.existsSync(file_name)){
        console.log('assist: file exist ');
        return true;
    }
    return false;
}

//Check if the width and hight are valid
function valid_width(width: number, hight: number): boolean{
if(width > 0 && hight > 0){
    return true;
}
return false;
}

// Resize the image using sharp
async function resize_image(file_name: string, file_wdith: number, file_height: number, n_file_path: string) {
  
  try{
    console.log("first line");
    await sharp(file_name)
    
  .resize({file_wdith, file_height
    // kernel: sharp.kernel.nearest,
    // fit: 'contain',
    // position: 'right top',
    // background: { r: 255, g: 255, b: 255, alpha: 0.5 }
    
  })
  // .toFile(`${n_file_path}.jpg`)
  .toFile(n_file_path);
  // .then(() => {
   console.log("last line");
    
  // });
  }
  catch{
    console.log("can not process the image!");
  }
   
}

export default {file_exist, valid_width, resize_image};