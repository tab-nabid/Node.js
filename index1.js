const fs = require('fs');
fs.appendFile('demo1.txt',' My home town is Mymensingh',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Data added!")
    }
})