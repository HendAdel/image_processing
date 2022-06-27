import express, {Request, Response} from 'express';
import resize from './api/resize-image';

const routes = express.Router();

routes.get('/', async (_req: Request, res: Response): Promise<void> => {
  res.send('Image rout!');
});

routes.use('/resize', resize);
export default routes;
