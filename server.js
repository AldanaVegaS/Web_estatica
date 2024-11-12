
// const http = require('http');
// const { extname,join } = require('path');
// const {readFile} = require('fs');
//const fs = require('fs').promises;
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const puerto = 3000;
const link = 'http://localhost:'+puerto;

const directories = {
    '.html': 'pages',
    '.json': 'Json',
    '.js': 'js',
    '.css': 'css',
    '.png': 'images',
    '.jpg': 'images',
    '.ico': 'images'
};

const allowedExt = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.ico': 'image/x-icon'
};

const requestListener = function(req,res){
    // Obtenemos el nombre del archivo solicitado
    console.log(req.url);
    const fileName = req.url === '/' ? '/pages/index.html' : req.url;
    const query =  req.query
    
    const filePath = path.join(__dirname, fileName);
try {
     // Intentamos leer el archivo solicitado
     fs.readFile(filePath, (err, data) => {
        if (err) {
            // Si ocurre un error (archivo no encontrado), servimos el archivo 404.html
            fs.readFile(path.join(__dirname, '404.html'), (error404, data404) => {
                console.log('error: ',err);
                if (error404) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('500 - Internal Server Error');
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data404);
                }
            });
        } else {
            // Si el archivo existe, lo servimos con el tipo de contenido adecuado
            let ext = path.extname(filePath);
            res.writeHead(200, { 'Content-Type': allowedExt[ext] });
            res.end(data);
        }
    });
} catch (error) {
    console.log('error: ',error);
}
   
        
    }

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