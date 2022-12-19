const express = require('express');
const server = express();
const mongoose = require('mongoose')
const ExpressError = require('./utils/ExpressError');
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/books')



mongoose.connect('mongodb://localhost:27017/bookDir', {

}, (err) => {
    if (err) {
        console.log(err)
    } else(
        console.log('successfully connected')
    )
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
mongoose.set('strictQuery', false);
server.use(bodyParser.json())

server.use('/api/v1', bookRoutes)


server.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})


const PORT = 5000
server.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`)
})