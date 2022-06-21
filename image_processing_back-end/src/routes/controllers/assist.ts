import fs from 'fs';
//call sharp tool to resize image
const sharp = require('sharp');
import { readdir } from 'node:fs/promises';

function file_exist(file_name: string): boolean {
  if (fs.existsSync(file_name)) {
    return true;
  }
  return false;
}

//Check if the width and hight are valid
function valid_width(width: number, hight: number): boolean {
  if (width > 0 && hight > 0) {
    return true;
  }
  return false;
}

// Resize the image using sharp
async function resize_image(
  file_name: string,
  file_wdith: number,
  file_height: number,
  n_file_path: string
) {
  try {
    await sharp(file_name)
      .resize({ file_wdith, file_height })
      .toFile(n_file_path);
  } catch (error) {
    throw new Error(
      `Cannot get the new image, Please try again later! ${error}`
    );
  }
}

export default { file_exist, valid_width, resize_image };
