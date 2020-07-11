const express = require("express");
const router = express.Router();
const listAllSkusAndProductsIdsController = require("./controllers/listAllSkusAndProductsIdsController");
const listProductController = require("./controllers/listProductController");
const searchController = require("./controllers/searchController");
const productController = require("./controllers/productController");

router.get("/list-all-skus", listAllSkusAndProductsIdsController.index);
router.get("/list-product", listProductController.index);
router.get("/search", searchController.index);
router.get("/product", productController.index);

module.exports = router;