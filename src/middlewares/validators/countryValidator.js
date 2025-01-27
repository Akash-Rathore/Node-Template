 
import Joi from 'joi';

const countrySchema = Joi.object({
  name: Joi.string().required(),
  is_active: Joi.boolean().required(),
  created_by: Joi.string().optional(),
  modified_by: Joi.string().optional(),
});

export const validateCountry = (req, res, next) => {
  const { error } = countrySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
