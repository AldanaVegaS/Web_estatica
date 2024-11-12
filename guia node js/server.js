
const http = require('http');
const { extname,join } = require('path');
const {readFile} = require('fs');
//const fs = require('fs').promises;


const puerto = 3000;
const link = 'http://localhost:'+puerto;

const requestListener = function(req,res){
    console.log(req.url);
    let filePath = req.url === '/' ? './index.html' :  req.url;
    const ext = extname(filePath);
    console.log();
    console.log(filePath);
    console.log();
    console.log(ext);
    
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.ico': 'image/x-icon'
    }[ext] || 'application/octec-stream';
    
    filePath = join(__dirname, 'public',filePath);
    console.log('ANTES');
    readFile(filePath, (err,content)=>{
        console.log('READ FILE');
        console.log(content)
        if(err){
            console.log('ERROR');
            res.writeHead(404,{'contentType':'text/html'})
            res.end('<h1>404 not found</h1>');
        }else{
            console.log('ELSE');
            res.writeHead(500,{'contentType':contentType})
            res.end(content)
        }
    })

    // const url = req.url;
    // if(url==='/'){
    //     fs.readFile("../pages/index.html")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "text/html");
    //         res.writeHead(200);
    //         res.end(contents);
    //     });
    //     console.log();
    // }

    // }
    //JSON
    // fs.readFile("../Json/series.json")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "application/json");
    //         res.writeHead(200);
    //         res.end(contents);
    //     });

    //CSS
    // if(){
    // fs.readFile("../css/stylesGeneral.css")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "text/css");
    //         res.writeHead(200);
    //         res.end(contents);
    //     });
    // }
    //JS
    // fs.readFile("../js/scriptInfo.js")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "application/javascript");
    //         res.writeHead(200);
    //         res.end(contents);
    // });
};
const server = http.createServer(requestListener);

server.listen(puerto, ()=>{
    console.log('servidor abierto en ' + link); 
});


// const getDatos = () => {
//     fetch(...)
//     .then((result)=> console.log(result))
//     .catch(()=> console.log("error"))
// }

// const getDatosModerno = async () => {
//     try {
//         const result = await fetch(..|)
//         console.log(result)
//     } catch (error) {
//         console.log("error")
//     }
// }