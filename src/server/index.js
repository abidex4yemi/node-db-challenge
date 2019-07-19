/**
 * Application Main file
 */
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

// Handle invalid request
app.all('*', (req, res) => res.status(404).json({
  success: false,
  message: 'Route does not exist...',
  body: [],
}));

export default app;
