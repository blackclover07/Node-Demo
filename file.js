const fs = require("fs");
const os = require("os");
// sync call
// fs.writeFileSync('./test.txt',`${Date.now().toString()} hi `);

// fs.writeFile('./test.txt','hello this is async',(err)=>{});

// const result=fs.readFileSync('./contacts.txt','utf-8');
// console.log(result);

// fs.readFile('./contacts.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("some error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt",`${Date.now()}heyy there\n`);

// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("docss/a/abc", { recursive: true });

console.log(os.hostname());