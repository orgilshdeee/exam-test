const categoryServices = require("./category.services");
const slugify = require("slugify");
const Category = require("./category.model");


const update = async (req, res) => {
  try {
    const categories = await categoryServices.updateCategory(req);
    res.json({
      data: categories,
      message: "Successful",
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const categories = await categoryServices.getByIdCategory(req);
    res.json({ data: categories });
  } catch (error) {
    res.json({ success: false, data: error });
  }
};
const deleteCat = async (req, res) => {
  try {
    const category = await categoryServices.deleteCategory(req);
    res.json({ data: category });
  } catch (error) {
    res.json({ data: error });
  }
};

const createCategory = async (req, res) => {
  try {
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
      status: req.body.status,
      // parentId: req.body.parentId
    };

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }
    const cat = new Category(categoryObj);
    cat.save((error, category) => {
      if (error) return res.status(400).json({ error });
      if (category) {
        return res.status(201).json({ category });
      }
    });
  } catch (error) {
    res.json({ data: error });
  }
};

const getCategory = (req, res) => {
  try {
    Category.find({}).exec((err, categories) => {
      if (err) return res.status(400).json({ message: err });
      if (categories) {
        const categoryList = categoryServices.createCate(categories);

        res.json({ data: categoryList, message: "Successfully" });
      }
    });
  } catch (error) {
    res.json({ data: error });
  }
};
module.exports = {
  update,
  getById,
  deleteCat,
  createCategory,
  getCategory,
};
