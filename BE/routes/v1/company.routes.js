const express = require("express");
const router = express.Router();
const companyController = require("../../modules/company/company.controller");
router.post("/", companyController.create);
router.get("/", companyController.getAll);
router.put("/", companyController.updateInfo);
router.delete("/:id", companyController.deleteCompany);
router.get("/:id", companyController.getById);
module.exports = router;
