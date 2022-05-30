import fs from 'fs';

// Check if the image exist. the file_name argument is the path + the image name ex"./images/thumbnail/fjord_200_200.jpg"
function file_exist(file_name: string): boolean{
    if(fs.existsSync(file_name)){
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

export default {file_exist, valid_width};