const request= require('request');
require('dotenv').config();

const geoCode=(adress, callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=${process.env.SECRET_KEY_GEO}`
    console.log(process.env.SECRET_KEY_GEO);
    request({url, json: true}, (err,{body})=>{
        if(err){
            callback('Low level error', undefined);
        
       /* else if(body.features.length===0){
            callback('High level error', undefined);*/  
        } else{
            console.log(body.features);
            const {center: coordinates}=body.features[0]
            const longtitude=coordinates[0];
            const latitude=coordinates[1];
            const adress=new Object({
                longtitude,
                latitude 
            });
            callback( undefined,adress);
        }
    });
}

module.exports=geoCode;