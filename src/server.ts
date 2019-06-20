import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
});

app.use('/api', router);

export default app;
