
//writeFile()
const fs = require('fs');
fs.writeFile('demo1.txt',' My home town is Mymensingh',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File created Successfully")
    }
})


//appendFile()
const fs = require('fs');
fs.appendFile('demo1.txt','But i stay in Savar due to my study',(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('Data added')
    }
});

//readFile()
const fs = require('fs');
fs.readFile('demo1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

//rename()
const fs = require('fs');
fs.rename('demo1.txt','demo2.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Successfull")
    }
});


//unlink()
const fs = require('fs');
fs.unlink('Nabid', (err)=>{
    if(err){
        console.log(err)
    } else{
        console.log(Done!)
    }
});

//existsFile()

const console = require('console');
const fs = require('fs');
fs.exists('Nabid',(result)=>{
    if(result){
        console.log("File found");
    }else{
        console.log("File not found");
    }
});