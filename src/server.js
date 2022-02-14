import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect('DEFINE HERE');

app.use(express.json());
app.use(routes);

app.listen(3333); 