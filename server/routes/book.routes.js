const express = require("express");
const { handleBookStoreController, handleBookListController, handleBookDeleteController, handleBookUpdateController } = require("../controller/book.controller")

const router = express.Router();

//http:localhost:1000/book/addbook
router.post("/addbook", handleBookStoreController)
router.get("/booklists", handleBookListController)
router.post("/deletebook", handleBookDeleteController)
router.put("/updatedbook", handleBookUpdateController)

module.exports = router;