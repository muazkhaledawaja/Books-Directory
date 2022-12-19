const Book = require('../models/book')

module.exports.getBook = async(req, res) => {
    const books = await Book.find()
    res.send(books)
}

module.exports.createBook = async(req, res) => {

    const myBook = new Book(req.body);
    await myBook.save()
    res.send(myBook)
    console.log(myBook);

};


module.exports.findBook = async(req, res) => {
    const myBook = await  Book.findById(req.params.id);
    if (!myBook) {
        res.send("can't find this Book");
    }
    res.send(myBook)
    console.log(myBook);


};

module.exports.search = async(req, res) => {
    let data = await Book.find({
        "$or": [
            { name: { $regex: req.params.key, $options: "i" } },
            { auther: { $regex: req.params.key, $options: "i" } },
            { description: { $regex: req.params.key, $options: "i" } }
        ]
    })
    res.send(data)
}


module.exports.updateBook = async(req, res) => {
    const { id } = req.params;
    const myBook = await Book.findByIdAndUpdate(id, {...req.body });
    await myBook.save();
    res.send(myBook)

}


module.exports.deleteBook = async(req, res) => {
    const { id } = req.params;
    const myBook = await Book.findByIdAndDelete(id);
    res.send(myBook)
    console.log(myBook);


}