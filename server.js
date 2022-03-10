const express = require ("express");
let app=express();
app.set ('port',process.env.PORT || 3000);
app.set ('appName', 'Server Web con Express');
app.use("/",express.static(__dirname+'/public'));
app.use("*",function (req,res,next){
    res.status(404);
    res.send('Url non presente');
});
const server=app.listen(app.get('port'),function(){
console.log('Server in ascolto');

});