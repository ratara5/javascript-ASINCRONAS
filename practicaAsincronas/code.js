//SISTEMA QUE ALMACENA NOTAS DE MANERA ORDENADA (Ejemplo: Física 1 antes que Física 2 por más que el servidor tarde en responder)
const materiasHTML=document.querySelector(".materias");

const materias=[
    {
        nombre:"Física 1",
        nota:8
    },{
        nombre:"Cálculo 3",
        nota:7
    },{
        nombre:"Bases de datos 3",
        nota:10
    },{
        nombre:"Matemáticas discretas 2",
        nota:9
    },{
        nombre:"Programación 4",
        nota:10
    }

];

const obtenerMateria=(id)=>{
    return new Promise((resolve,reject)=>{
        materia=materias[id];
        if(materia==undefined) reject("La materia no existe");
        else setTimeout(()=>resolve(materia),Math.random()*1400); //el setTimeout simula el funcionamiento de un servidor
    })
}


const devolverMaterias=async ()=>{
    for(materia in materias){    
        //obtenerMateria(materia).then(mat=>console.log(mat));
        data=await obtenerMateria(materia);
        console.log(data)
        let newHTMLCode=`<div class="materia">
            <div class="nombre">${data.nombre}</div>
            <div class="nota">${data.nota}</div>
        </div>`
        materiasHTML.innerHTML+=newHTMLCode;
    }
}

devolverMaterias();

