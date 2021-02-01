const route = require("express").Router();
const ProductController = require("../Controller/ProductController");
route.post("/",ProductController.createProductController);
route.get("/",ProductController.showFoodController);
route.get("/idFood/:idFood",ProductController.showFoodByIdController);
route.get("/:idCate",ProductController.showFoodByCateController);
route.get("/search/searchFood",ProductController.searchFoodController);
route.get("/search/searchAddress",ProductController.searchAddressController);
module.exports = route;