# Processing Images Project
> It is a simple project to resize the image by user inputes for selected image and the new width and height he enter them..

# Website Feture
## Images Gallery
> Show all existing images, to choose one of them to change it's size.

## In this project I did:
* Using node.js, typeScript
* Using prettier with eslint
* The server that have the endpoint function.
* Using Jasmine for test unit.
* Use sharp to resize the image.

## To run the project
1. cd to folder (image_processing_back-end)
2. Install dependencies (node.js - typescript - express - jasmine - supertest)
    * npm init -y
    * npm install typescript & npm install typescript --save-dev
    * tsc --init
    * npm install express morgan dotenv
    * npm install --save-dev @types/express @types/morgan @types/node nodemon ts-node nodemon
    * npm i supertest jasmine-spec-reporter jasmine
    OR make one step by:
    * npm i -g m-zanaty-web-utils
3. start the server by (npm run start)
4. use the endpoint (http://localhost:3000/api/resize)
5. add the image name, width, and hight as query string parameters like this(http://localhost:3000/api/resize?image_name=[image name].jpg&width=[image width]&hight=[image hight])
6. if the image exist with the same width and hight in the folder(image_processing\image_processing_back-end\images\thumbnail) it will back in the response.
7. if the Image with new width or hight. The resize_image function will resize it and save it to the (thumbnail) folder and send it with response
8. to run lint and preittier:
    * cd to the main project folder (image_processing)
    * for lint (npm run lint:fix)
    * for preittier (npm run format)