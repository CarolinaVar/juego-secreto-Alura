let numeroSecreto = 0;
let intento=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //permite a acceder a cada elemento ()parametro significa el parentesis 
//se debe utilizar variable no solo (document.querySelector('h1');) h1 es el titulo que esta en documento HTML
    elementoHTML.innerHTML = texto; 
    return;
}
function verificarIntento() {    //la funcion se debe copiar el nombre igual porque java Script hace diferencia entre mayusculas y minusculas
    // aqui se dice lo que se va hacer 
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  //parseInt se utiliza para pasar un valor de string a numero 
  
    console.log(intento);
   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el número en ${intento} ${(intento===1)? 'vez' : 'veces'}`); //?= si es 1  y : dos puntos sibnifica de lo contrario
   document.getElementById('reiniciar').removeAttribute('disabled');
   
   
    } else {
    // el usuario no acerto
    if (numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento('p','el numero secreto es menor');
    } else {
        asignarTextoElemento('p','el numero secreto es mayor');
  }
  intento++;
  limpiarCaja();
}
return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';

    
}
function generarNumeroSecreto()  { //FUNCION STATEMENT CUERPO DE LA FUNCION ME DA LOS PASOS DE LA FUNCION 
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //let numeroSecreto = math.floor(Math.random()*10)+1;
console.log (numeroGenerado);
console.log (listaNumerosSorteados);
// si ya sorteamos todos los numeros 
if (listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p','Ya se sortiaron todos los números posibles');
} else{
    // si el numero esta incluid en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

          }
       }
}

function condicionesIniciales(){
    asignarTextoElemento( 'h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
// inicializar el numero de intento
condicionesIniciales();
 // deshabilitar el boton de nuevo juego 
 document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales ();

//crl+f para buscar 