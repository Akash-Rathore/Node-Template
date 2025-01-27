import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/v1/index.js';
import path from 'path';
import { fileURLToPath } from 'url';


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Get __filename equivalent
const __filename = fileURLToPath(import.meta.url);

// Get __dirname equivalent
const __dirname = path.dirname(__filename);

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public'))); // Adjust the path as needed

// Use routes under the /v1 path
app.use('/v1', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
