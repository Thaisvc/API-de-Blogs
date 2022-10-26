const { Category } = require('../models');

const creatNewCategory = async ({ name }) => {
const checkExists = await Category.findOne({ where: { name } });
if (checkExists !== null) return { type: 'ALREADY_EXISTS', message: 'Category already registered' };
const newCategory = await Category.create({ name });
return { type: null, message: newCategory };
};

module.exports = {
    creatNewCategory,
};