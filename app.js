let amigos = [];

function agregarAmigo() {
    //si lo que envia el usuario en la caja es vacio :
    if(document.getElementById('amigo').value == '') {
        //le mostraremos un mensaje en pantalla de que debe digitar un nombre válido
        alert('Digite un nombre válido');
    } else {
        //caso contrario (o sea que si el nombre que digito no esta vacio) lo añadimos al final de la lista
        amigos.push(document.getElementById('amigo').value);
        //mostramos la lista de amigos : 
        mostrarLista();
        //borramos lo que se haya digitado para comodidad del usuario: 
        borrarInput();
    }
}

function mostrarLista() {
    let longitud = amigos.length;
    //accedemos a la lista de amigos del html 
    let listaAmigos = document.querySelector('#listaAmigos');
    //limpiar la lista para que no mantenga lo anterior: 
    listaAmigos.innerHTML = '';
    let i = 0;

    while(i < longitud) {
        //concatenamos otro elemento a la lista sin borrar lo que ya esta 
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        i ++;
    }
}

function borrarInput() {
    let input = document.querySelector('input');
    input.value = '';
}

function sortearAmigo() {
    //en caso de que no haya digitado ningun nombre y quiera sortear :
    if(amigos.length == 0) {
        alert('Digite mas nombres en su lista !');
    } else {
        //caso contrario, procede a generar el numero y asociarlo a un indice del array
        let longitud = amigos.length; //numero maximo
        //utilizamos un numero pseudo aleatorio para asociarlo con un indice del array
        let numeroAleatorio = Math.floor(Math.random() * longitud);
        let resultado = document.querySelector('#resultado');
        //pasamos como resultado el array en el indice del numero sorteado 
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroAleatorio]}`;
    }
}
