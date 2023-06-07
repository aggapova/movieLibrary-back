const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const movieRoutes = require('./routes/movieRoutes');

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.error(`Error in DB connection ${err}`));


app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});

app.use('/movies', movieRoutes);
