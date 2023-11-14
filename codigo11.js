"use strict"

// code with fetch

// const getName = async ()=>{
//     let petición = await fetch("informacion.txt");
//     let res = await petición.json();
//     let div = document.querySelector(".lista");
//     div.textContent = res.nombre;
//     document.body.appendChild(div);
// }

// const getAge = async ()=>{
//     let petición = await fetch("informacion.txt");
//     let res = await petición.json();
//     let div = document.querySelector(".lista-2");
//     div.textContent = res.edad;
//     document.body.appendChild(div);
// }

// document.querySelector(".name").addEventListener("click",getName);
// document.querySelector(".age").addEventListener("click",getAge); 


// // let div = document.createElement("div");



// code with axios
const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprob");
    let desaprobados = document.querySelector(".num-desaprob");
    try {
        let res = await axios("informacion.txt");
        aprobados.innerHTML = res.data.aprobados;
        desaprobados.innerHTML = res.data.desaprobados;
    } catch(e) {
        aprobados.textContent = "La API falló";
        desaprobados.textContent = "La API falló";
        // console.log(e);
    }
}

document.querySelector(".getInfo").addEventListener("click",getInfo);