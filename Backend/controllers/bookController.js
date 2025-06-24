const Book = require("../models/Book");

exports.createBook = async (req, res) => {
    const { title,author, description, image } = req.body;
    try {
        const book = new Book({
            title,
            author, 
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

exports.getMyBooks = async (req, res) => {
  try {
    const books = await Book.find({ owner: req.user.id }).populate("owner", "username");
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch books" });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("owner", "username email");
    if (!book) return res.status(404).json({ msg: "Book not found" });

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not found" });

    // only owner can update
    if (book.owner.toString() !== req.user.id)
      return res.status(401).json({ msg: "Unauthorized" });

    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Update failed" });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not found" });

    if (book.owner.toString() !== req.user.id)
      return res.status(401).json({ msg: "Unauthorized" });

    await book.deleteOne();
    res.status(200).json({ msg: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Delete failed" });
  }
};

