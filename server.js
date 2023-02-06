const express = require('express');





const mongoose = require('mongoose');
const Transactions= require('./model');
const app = express();
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://chennakesava:chennakesava@cluster0.kczwyym.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log('DB connected....')
).catch(err => console.log(err))

app.post('/addtransactions', async (req,res) =>{
    const {transactions} =req.body;
    try{
     const newData = new Transactions({transactions})
     await newData.save();
     return res.json(await Transactions.find())
    }catch(err){
       console.log(err.message);
    }

})


app.listen (3000, ()=> console.log('server running...'))