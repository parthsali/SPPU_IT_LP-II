const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const musicRouter = require('./routes/musicRoutes');

const app = express();
app.use(cors());



mongoose.connect("mongodb://localhost:27017/musicDB").then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});


app.use(express.json());
app.use('/music', musicRouter);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

