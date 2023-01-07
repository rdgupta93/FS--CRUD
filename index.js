const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath= `${dirPath}/apple.txt`;

//fs.writeFileSync(filePath,'This is a simple text file');    // Create file 
//fs.readFile(filePath,'utf8',(err,item)=>{                        // read files
 //   console.log(item)
 // }
 //fs.appendFile(filePath,'file name is apple.txt',(err)=>{       // update
 //   if(!err) console.log("File is updated")
 // })
 //fs.rename(filePath,`${dirPath}/Mango.txt`,(err)=>{         // Rename
 //  if(!err) console.log("File is updated")
 // })
 fs.unlinkSync(`${dirPath}/Mango.txt`)