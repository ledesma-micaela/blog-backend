import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { dbConfig } from './database/db';
import postRoute from './routes/post.routes';
import cors from 'cors';

// import path from 'path';

const app = express();
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
    console.log('Database sucessfully connected ');
  },
  error => {
    console.log('Database error: ' + error);
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// API root
app.use('/api', postRoute);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(() => { throw new Error('Not Found'); });
});

// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
