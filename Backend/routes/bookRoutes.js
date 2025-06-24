const express = require("express");
const { createBook,getMyBooks,getBookById,updateBook,deleteBook    } = require("../controllers/bookController");
const verifyToken = require("../middleware/auth");


const router = express.Router();

router.post("/upload", verifyToken, createBook);
router.get("/my", verifyToken, getMyBooks); // New route for homepage
router.get("/:id", getBookById);
router.put("/:id", verifyToken, updateBook);
router.delete("/:id", verifyToken, deleteBook);


module.exports = router;
