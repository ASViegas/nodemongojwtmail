const express = require ('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const userRouter = require('./users/UserRouter');
const productRouter = require('./products/ProductsRouter');
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

const conection = "mongodb+srv://vão buscar os vossos@techof.2cahhle.mongodb.net/Store?retryWrites=true&w=majority"

mongoose.connect(conection,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = 3000
//routes

app.listen(port);