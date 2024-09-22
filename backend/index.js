// const express = require("express");
// const cors = require("cors");
// const rootRouter = require('./routes/index');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/v1',rootRouter); //mainRouter == rootRouter

// console.log("App listening on port 3000\n");
// app.listen(3000);


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rootRouter = require('./routes');
require('dotenv').config
const app = express();

// Middleware setup
// app.use(cors()); // Enable CORS for all routes, add allow specific origins here frontend link
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection

mongoose.connect("mongodb+srv://siddhi064mca23:re8n2LfDRmmiyLOA@cluster0.atfa7.mongodb.net/");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use('/api/v1', rootRouter); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
