const express = require("express");
const { createBook } = require("../controllers/bookController");
const verifyToken = require("../middleware/auth");

const router = express.Router();

router.post("/upload", verifyToken, createBook);

module.exports = router;
