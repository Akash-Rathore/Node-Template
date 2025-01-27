// import db from '../mysql/db.js';

// Get all countries
export const getAllCountries = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM country', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

// Create a new country
export const createCountry = (data) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO country (name, is_active, created_by) VALUES (?, ?, ?)', 
      [data.name, data.is_active, data.created_by], 
      (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
  });
};

// Update an existing country
export const updateCountry = (id, data) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE country SET name = ?, is_active = ?, modified_by = ? WHERE id = ?',
      [data.name, data.is_active, data.modified_by, id],
      (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
  });
};

// Delete a country
export const deleteCountry = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM country WHERE id = ?', [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
