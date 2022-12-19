const express = require('express');
const router = express.Router();
const books = require('../controllers/books')
const catchAsync = require('../utils/catchAsync');





router.get('/books', catchAsync(books.getBook))
router.get('/search/:key', catchAsync(books.search))
router.post('/book', catchAsync(books.createBook))
router.get('/book/:id', catchAsync(books.findBook))
router.delete('/book/:id', catchAsync(books.deleteBook))
router.patch('/book/:id', catchAsync(books.updateBook))


module.exports = router;