const flipCard = document.getElementsByClassName("flip-card-inner");
const flipLinkFront = document.getElementById("flip-front");
const flipLinkBack = document.getElementById("flip-back");
const signUpButton = document.getElementById("sign-up-button");
const logInButton = document.getElementById("log-in-button");

flipLinkFront.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
});

flipLinkBack.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
});

signUpButton.addEventListener("click", (e)=>{
    e.preventDefault;
    window.location.href="../inicio.html"
});

logInButton.addEventListener("click", (e)=>{
    e.preventDefault;
    window.location.href="../inicio.html"
});

