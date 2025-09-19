const express = require('express');

const {ServerConfig , Logger} = require('./config');
const apiRoutes = require('./routes');
// const { or } = require('sequelize');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully created server at port ${ServerConfig.PORT}`);


    // const {City,Airport} = require('./models');
    // const city = await City.findByPk(1);
    // console.log(city);
    // // const airport = await Airport.create({name : 'indira gandhi',code:'INR',cityId:1});
    // // or
    // const aiport  = await city.createAirport({name:'new indira gandhi sirport',code:'NINR'}); 

    // await City.destroy({
    //     where :{
    //         id:1
    //     }
    // });

});