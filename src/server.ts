import { Server } from 'http';
import 'express-async-errors';
import app from './app';
import logger from './helpers/logger';
import { connectToDatabase } from './config/db';
import { scheduleController } from './controllers';

// setting up server
const PORT = process.env.PORT || 5000;

const server: Server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server running on port ${PORT}`);
  // scheduleController.startEvery10thMinute();
  // scheduleController.startHourlyJobs();
});

// handle unhanled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);

  // close server
  server.close(() => process.exit(1));
});
