// const array = [ 1, 2, 3, 4 ];
// const otroArray = array.map((e) => e * 2);
// console.log(otroArray);

// const array = [ 1, 2, 3, 4 ];
// const otroArray = array.filter((e) => e <= 3 );
// console.log(otroArray);

// const array = [ 1, 2, 3, 4 ];
// const [elem1, elem2, ...otros] = array; 
// console.log(elem1);
// console.log(elem2);
// console.log(otros);


// const usuario = { id: 1, nombre: 'Carlos' };
// const { nombre } = usuario;
// console.log(nombre);

// console.log('esto se imprime primero');
// setTimeout(() => {
//  console.log('esto se imprime segundo?')
// }, 5000);
// console.log('esto se imprime ultimo?');


// const unaFuncion = (param) => {
//     return new Promise((resolve, reject) => {
//     console.log({ param });
//     if (param === 1) {
//     resolve()
//     } else {
//     reject()
//     }
//     });
// }

//    // Se ejecuta el then o el catch?
//    unaFuncion(1).then(() => {
//         console.log("Se ejecuta then con 1");
//    }).catch(error => {
//     console.log("Se catch then con 1");
//    })
//    console.log('cuando se ejecuta esto?')
//    // Se ejecuta el then o el catch?

//    unaFuncion(40).then(() => {
//     console.log("Se ejecuta then con 40");
//    }).catch(error => {
//     console.log("Se ejecuta  catch con 40");
//    })
//    console.log('cuando se ejecuta esto?')
   

// const sleep = timeout => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve();
//     }, timeout);
//     });
// };

//    const unaFuncion = async() => {
//     console.log("Inicia unaFuncion");
//     sleep(2000).then(() => {
//         console.log("Dentro de then en unaFuncion");
//     });
//    }
//    const otraFuncion = async() => {
//     console.log("Inicia otraFuncion");
//     await sleep(2000);
//     console.log("Despues de await en otraFuncion");
//     }

// unaFuncion();
// otraFuncion();