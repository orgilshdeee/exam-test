const mongoose = require("mongoose");
const Category = require("./category.model");

// const createCategory = async (req) => {
//   const category = new Category(req.body);
//   return category.save();
// };

// const getAllCategory = async () => {
//   return Category.find();
// };

const updateCategory = async (req) => {
  const { id } = req.query;
  await Category.findByIdAndUpdate(id, req.body);
  return await Category.findById(id);
};

const getByIdCategory = async (req) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) return Category.findById(id);
};

const deleteCategory = async (req) => {
  const { id } = req.params;
  return Category.findByIdAndDelete(id, req.body);
};

const createCate = (categories, parentId = null) => {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      status: cate.status,
      children: createCate(categories, cate._id),
    });
  }

  return categoryList;
};

module.exports = {
  updateCategory,
  getByIdCategory,
  deleteCategory,
  createCate,
};
