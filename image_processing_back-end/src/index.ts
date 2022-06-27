// import the express to build the server
import express, {Request, Response} from 'express';
import routes from './routes/img_rout';

const app = express();

const port: number = 3000;

//Use routes
app.use('/api', routes);
app.get('/', async (_req: Request, res: Response): Promise<void> => {
  res.send(`Image processing project main end point!`);
});
// resize image endpoint function

// start server function
app.listen(port, async(): Promise<void> => {
  console.log(`The server runing at localhost: ${port}`);
});

export default app;
