const categoryService = require('../service/categories.service');
const validateCategory = require('../validations/categorie.schema');
const { mapError } = require('../helpers/mapError');

const addCategory = async (req, res) => {
    const { error } = await validateCategory.categorySchema(req.body);
    if (error) res.status(400).json({ message: error.details[0].message });
    const { type, message } = await categoryService.creatNewCategory(req.body);
    if (type) res.status(mapError(type)).json(message);
    res.status(201).json(message);
};

module.exports = {
    addCategory,
};