//LAS PROMESAS SON ASÍNCRONAS
const objeto={
    propiedad1:"valor1",
    propiedad2:"valor2",
    propiedad3:"valor3"
};

// const obtenerInformacion=()=>{
//     setTimeout(()=>{return objeto},2000) ;
// }

// console.log(obtenerInformacion()) //undefined por que obtener información tarda un tiempo debido al setTimeout, y console.log necesita mostrarla YA

//EL RETRASO DENTRO DE UNA PROMESA
console.log("--------------------------")
const obtenerInformacion=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},2000)
    })    
}

//obtenerInformacion().then(resultado=>console.log(resultado)) //EN ESTE CASO, esta línea es mejor que el siguiente bloque de async

//CON AWAIT-ASYNC: LAS FUNCIONES ASÍNCRONAS TRABAJAN CON PROMESAS
console.log("--------------------------")
const mostrarResultado =async ()=>{
    resultado=await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

//EL RETRASO DENTRO DE UNA PROMESA: Otra ObtenerInformacion (será la 2)
console.log("--------------------------")
const obtenerInformacion2=(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*1000)
    })    
}

//las siguientes tres instrucciones se mostrarían en desorden cada vez...
obtenerInformacion2("cadena").then(resultado=>console.log(resultado))

obtenerInformacion2("piñón").then(resultado=>console.log(resultado))

obtenerInformacion2("traste").then(resultado=>console.log(resultado))

//...por eso usamos async
console.log("--------------------------")
const mostrarData=async ()=>{
    data1=await obtenerInformacion2("1: cadena"); //await accede al valor que retorna la promesa...hasta que no se ejecute esta instrucción no pasa a la siguiente
    data2=await obtenerInformacion2("2: piñón");
    data3=await obtenerInformacion2("3: traste");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();