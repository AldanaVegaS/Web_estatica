let navBar = document.getElementById('navBar');

const ul = document.createElement('ul');

//LOGO
const logo = document.createElement('li');
logo.className = 'logo';

const a = document.createElement('a');
a.href = "../home.html";
const logoImg = document.createElement('img');
logoImg.className = 'logo';
logoImg.src = "../images/logo1.png";

a.appendChild(logoImg);
logo.appendChild(a);
ul.appendChild(logo);


//BARRA DE BUSQUEDA
const barra = document.createElement('li');
barra.className = "search-icon";
const input = document.createElement('input');
input.type = "search";
input.placeholder = "ej: serie:Black Mirror";
const lupa = document.createElement('i');
lupa.className = 'fa fa-search'; // Agregar las clases necesarias para el icono
lupa.id = "lupa";
lupa.setAttribute('aria-hidden', 'true');

barra.appendChild(input);
barra.appendChild(lupa);
ul.appendChild(barra);


//BOTON
const boton = document.createElement('li');
boton.className = "boton";
boton.id = "boton";
const icono = document.createElement('i');
icono.className = 'fa fa-bars'; // Agregar las clases necesarias para el icono
icono.setAttribute('aria-hidden', 'true');
boton.appendChild(icono);
ul.appendChild(boton);


//ITEMS
const items = document.createElement('div');
items.className = "items";
items.id = "items";

const itemsLista = ["Listas", "Watchlist", "Perfil"];
itemsLista.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = "#";
  if (item == "Perfil") {
    a.href = "../";
  } else {
    a.href = "#";
  }
  a.textContent = item;
  li.appendChild(a);
  items.appendChild(li);
});
ul.appendChild(items);

navBar.appendChild(ul);



const b = document.getElementById('boton');
const i = document.getElementById('items');
b.addEventListener('click', () => {
  i.classList.toggle('show');
});

const buscar = document.getElementById('lupa');

buscar.addEventListener('click', () => {
  const busqueda = input.value.split(":");
  window.location.href = `../info.html?titulo=${busqueda[1]}&tipo=${busqueda[0]}`
}) 