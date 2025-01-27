import express from 'express';
import countryRoutes from './countryRoutes.js';
const router = express.Router();

// List of all route modules
const routeModules = [
    countryRoutes
];

// Register each route module with the router
routeModules.forEach(route => router.use(route));

// Export the router
export default router;
