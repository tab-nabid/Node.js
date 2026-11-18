const fs = require('fs');
fs.writeFile('demo1.txt',' My home town is Mymensingh',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File created Successfully")
    }
})