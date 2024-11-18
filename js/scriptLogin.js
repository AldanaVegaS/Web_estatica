const flipCard = document.getElementsByClassName("flip-card-inner");
const flipLinkFront = document.getElementById("flip-front");
const flipLinkBack = document.getElementById("flip-back");
const signUpButton = document.getElementById("sign-up-button");
const logInButton = document.getElementById("log-in-button");
const formLogIn = document.getElementById('login');
const formRegister = document.getElementById('register');

flipLinkFront.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
});

flipLinkBack.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
});

formRegister.addEventListener("submit",async (e)=>{
    e.preventDefault();
    console.log(e.target.children.username.value);
    const res = await fetch('http://localhost:3000/api/register',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            user: e.target.children.username.value,
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });
    if (res.ok) {
        const data = await res.json();
        console.log('Respuesta del servidor:', data);
        window.location.href = '../home.html'
    } else {
        const errorData = await res.json();
        console.error('Error:', errorData.message);
    }

});

const mensajeError = document.getElementsByName("error")[0]
formLogIn.addEventListener("submit",async (e)=>{
    e.preventDefault();
    console.log(e.target.children.email.value);
    const res = await fetch('http://localhost:3000/api/login',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });
    if (res.ok) {
        const data = await res.json();
        console.log('Respuesta del servidor:', data);
        window.location.href = '../home.html'
    } else {
        const errorData = await res.json();
        console.error('Error:', errorData.message);
    }
    //alert('Registro')

});

// Obtener el card de la URL
const params = new URLSearchParams(window.location.search);
const card = params.get('card');
if (card == "'login'") {
    document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
} else {
    document.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
}