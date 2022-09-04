//Inicialización de variables
let botonesDestapados = 0;
let boton1 = null;
let boton2 = null;
let resultado1 = null;
let resultado2 = null;
let movimientos = 0;
let aciertos = 0;

//Apuntando al HTML
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");

//Generar arreglo de números aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>Math.random()-0.5);
console.log(numeros);

//Función principal
function destapar(id){
    botonesDestapados++;
    if(botonesDestapados == 1){
        //Mostrar resultado1 y deshabilitar boton1
        boton1 = document.getElementById(id);
        resultado1 = numeros[id];
        boton1.innerHTML = resultado1;
        boton1.disabled = true;
        console.log(`Resultado1: ${resultado1}`);
    }else if(botonesDestapados == 2){
        //Mostrar resultado2 y deshabilitar boton2
        boton2 = document.getElementById(id);
        resultado2 = numeros[id];
        boton2.innerHTML = resultado2;
        boton2.disabled = true;
        console.log(`Resultado2: ${resultado2}`);
        //Incrementar y mostrar movimientos
        movimientos++;
        console.log(`Movimientos: ${movimientos}`);
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
        if(resultado1 == resultado2){
            botonesDestapados = 0;
            //Incrementar y mostrar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            if(aciertos == 8){
                mostrarAciertos.innerHTML = `Completaste los ${aciertos} aciertos`
                mostrarMovimientos.innerHTML = `FELICITACIONES! Alcanzaste los 8 aciertos con ${movimientos} movimientos`;
            }
        }
        else{
            setTimeout(()=>{
                boton1.innerHTML = " ";
                boton2.innerHTML = " ";
                boton1.disabled = false;
                boton2.disabled = false;
                botonesDestapados = 0;

            }, 1000)
        }

    }
}
