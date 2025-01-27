import {
  getAllCountries as fetchAllCountries,
  createCountry as insertCountry,
  updateCountry as modifyCountry,
  deleteCountry as removeCountry
} from '../../database/models/countryModel.js';
import logger from '../../common/logger.js'; // Import logger for logging
import responses from '../../common/responses.js';
const { success, created, badRequest, notFound, internalServerError } = responses;


export const getAllCountries = async (req, res) => {
  try {
    // const countries = await fetchAllCountries();
    logger.info('Fetched all countries successfully');
    return success(res, countries);
  } catch (error) {
    logger.error(`Error fetching countries: ${error.message}`);
    return internalServerError(res, 'Error fetching countries', error.message);
  }
};

export const createCountry = async (req, res) => {
  const { name, is_active, created_by } = req.body;

  if (!name || typeof is_active !== 'boolean') {
    logger.warn('Invalid input for creating country');
    return badRequest(res, 'Name and is_active are required');
  }

  try {
    // const result = await insertCountry({ name, is_active, created_by });
    logger.info(`Country created successfully: ${name}`);
    return created(res, { id: result.insertId, name, is_active, created_by });
  } catch (error) {
    logger.error(`Error creating country: ${error.message}`);
    return internalServerError(res, 'Error creating country', error.message);
  }
};

export const updateCountry = async (req, res) => {
  const { id } = req.params;
  const { name, is_active, modified_by } = req.body;

  if (!name || typeof is_active !== 'boolean') {
    logger.warn(`Invalid input for updating country with ID: ${id}`);
    return badRequest(res, 'Name and is_active are required');
  }

  try {
    // await modifyCountry(id, { name, is_active, modified_by });
    logger.info(`Country with ID: ${id} updated successfully`);
    return success(res, { message: 'Country updated successfully' });
  } catch (error) {
    logger.error(`Error updating country with ID: ${id}, ${error.message}`);
    return internalServerError(res, 'Error updating country', error.message);
  }
};

export const deleteCountry = async (req, res) => {
  const { id } = req.params;
  try {
    // await removeCountry(id);
    logger.info(`Country with ID: ${id} deleted successfully`);
    return success(res, { message: 'Country deleted successfully' });
  } catch (error) {
    logger.error(`Error deleting country with ID: ${id}, ${error.message}`);
    return internalServerError(res, 'Error deleting country', error.message);
  }
};
