const Book = require("../models/book");

exports.getAddBook = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
  });
};

exports.postAddBook = (req, res, next) => {
  const book = new Book(req.body.title);
  book.save();
  res.redirect("/");
};

exports.getBooks = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("shop", {
      books,
      path: "/",
      pageTitle: "Shop",
    });
  });
};