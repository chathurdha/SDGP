const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
})

//routes

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
   console.log('connected to mongodb');

   //listen to port
   app.listen( process.env.PORT,() => {
      console.log('Listening for requests on PORT', process.env.PORT)
   })
})
.catch((err) => {
   console.log(err);
})

//imeth's code
app.use("/api", require("./routes/register"));
app.use("/api", require("./routes/login"));

app.use('/api/organizations', require('./routes/organizationRoutes'));





