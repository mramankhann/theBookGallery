const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to the BookSwap Application API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});





