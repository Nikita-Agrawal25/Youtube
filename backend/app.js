const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const seedDB = require('./seedDB')

const videoRoutes = require("./routes/video");

app.use(cors());
app.use(express.json());
app.use('/api/videos', videoRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log("DB connected"))
.catch((e) => console.log(error))

seedDB();

app.listen(8080, ()=>{
    console.log("Server connected at 8080");
})