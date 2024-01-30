let tamaño = 10;
let sorteados = [];
let Secreto;
let contadorDeIntentos; 

condicionesIniciales();

function reiniciarJuego()
{
    limpia();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


function condicionesIniciales()
{
    asignacionTexto('h1','Juego del numero secreto');
    asignacionTexto('p','Ingresa un numero del 1 al 100');
    Secreto = generaNumeroAleatorio();
    contadorDeIntentos = 1;
}

function generaNumeroAleatorio()
{
    let aleatorio = Math.floor(Math.random()*tamaño)+1;
    let contadorLista = 0;
    console.log(aleatorio);
    console.log(sorteados);
    
    if(sorteados.length==tamaño)
    {
        asignacionTexto('p','Se probaron todos los valors');
    }
    else
    {
        if(sorteados.includes(aleatorio))
        {
        return generaNumeroAleatorio();
        }
        else
        {
        sorteados.push(aleatorio);
        return aleatorio;
        }

    }
    
}

function asignacionTexto(elemento, texto) //Funcion que asigna texto a los elementos del html
{
    let titulo = document.querySelector(elemento);     //asigna el objeto h1 (linea 21 del html) a la variable titulo 
    titulo.innerHTML = texto;  //asigna un texto al obejto titulo
    return;

}

function verificarIntento()
{
    let numeroIngresado = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroIngresado);
    //console.log(Secreto);
    //console.log(Secreto === numeroIngresado);

    if (Secreto === numeroIngresado)
    {
        asignacionTexto('p',`El numero es correcto, acertaste en ${contadorDeIntentos} ${(contadorDeIntentos === 1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else
    {
        contadorDeIntentos++;

        if (Secreto < numeroIngresado)
            {
                asignacionTexto('p','El numero es menor');
            }

        else 
            {
                asignacionTexto('p','el numero es mayor');
            }
        
            limpia();
    }    
    return;
}

function limpia()
{
    let caja = document.querySelector('#valorUsuario');
    caja.value = '';
}

