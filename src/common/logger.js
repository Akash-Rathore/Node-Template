import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

// Define the log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Create the logger
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new transports.Console(),  // Log to the console
    new transports.File({ filename: 'logs/app.log' })  // Log to a file
  ],
});

// Export the logger for use in other parts of the application
export default logger;
