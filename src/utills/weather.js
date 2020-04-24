const request= require('request');
require('dotenv').config();

const forecast= (longtitude, latitude, callback)=>{
    const secretKey= process.env.SECRET_KEY;
    const url='http://api.weatherstack.com/current?access_key='+secretKey+'&query='+latitude+','+longtitude+'&units=f';
    request({url: url, json: true}, (err,response)=>{
            if(err){
              callback('Low level error', undefined);
            }else if(response.body.error){
                callback('High level error', undefined);
            }else{ 

                // const {label:productLabel, stock, rating = 5} = product
                const { country: countryName, name: name}= response.body.location;
                const {temperature}=response.body.current;
                const data={
                    name,
                    countryName,
                    temperature
                }
                callback(undefined, data);
            }
        });
}


module.exports=forecast;