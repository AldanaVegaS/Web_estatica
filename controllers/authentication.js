
const usuarios = require('../Json/usuarios.json');
const fs = require('fs');
const path = require('path');

async function login(req,res){
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password ){
        res.status(400).send({status:'Error', message:'Los campos están incompletos'})
    }
    const usuario = usuarios.users.find( usuario => usuario.email === email);
    if(!usuario || usuario.password!==password){
        return res.status(400).json({status:'Error', message:'Error de log in'})
    }else{
        return res.status(201).json({
            status: 'Success',
            message: 'Usuario inicio sesión correctamente'
        });
    }
    
    //alert('Inicio sesion');
}

async function register(req,res){
    //console.log(req.body)
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    if(!user || !email || !password ){
        res.status(400).send({status:'Error', 
                              message:'Los campos están incompletos'})
    }

    const filePath = path.join(__dirname, '../Json/usuarios.json');
    const usuarios = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const usuarioExistente = usuarios.users.find( usuario => usuario.username === user);
    const correoExistente = usuarios.users.find( usuario => usuario.email === email);
    if(usuarioExistente || correoExistente){
         return res.status(400).json({
            status:'Error', 
            message:'El usuario ya existe'})
    }else{
        usuarios.users.push(req.body);
        fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2), 'utf8');
        
        return res.status(201).json({
            status: 'Success',
            message: 'Usuario registrado correctamente'
        });
    }
}

module.exports = {login,register};