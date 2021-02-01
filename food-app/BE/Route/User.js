const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController");
route.get("/",UserController.getListUserController);
route.post("/",UserController.createUserController);
route.post("/login",UserController.loginController);
route.get("/:idUser",UserController.getUserInfoController);
route.get("/s/userprofile",UserController.getUserInfoController);
module.exports = route;