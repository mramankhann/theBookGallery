const Book = require("../models/Book");

exports.createBook = async (req, res) => {
    const { title, description, image } = req.body;
    try {
        const book = new Book({
            title,
            description,
            image,
            owner: req.user.id,
        });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ msg: "Book upload failed" });
    }
};
