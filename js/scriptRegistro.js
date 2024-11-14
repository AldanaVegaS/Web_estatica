const form = document.getElementById('register');
form.addEventListener('submit', (event)=>{
    console.log('Registro');
    event.preventDefault();
    const user =document.getElementById('username').value;
    const email =document.getElementById('email').value;
    const password =document.getElementById('password').value;

    if(!user || !email || !password){
        alert('Por favor, completar todos los campos')
    }
})