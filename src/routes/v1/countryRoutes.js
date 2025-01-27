import express from 'express';
import {
  getAllCountries,
  createCountry,
  updateCountry,
  deleteCountry
} from '../../bussiness/controllers/countryController.js';
import { validateCountry } from '../../middlewares/validators/index.js';

const router = express.Router();
// Define routes for country management
router.route('/').get(getAllCountries).post(validateCountry, createCountry); 
router.route('/:id').put(validateCountry, updateCountry).delete(deleteCountry); 

export default router;
