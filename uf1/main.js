var arrayusuario = prompt("Introduce las palabras a adivinar").split(",");


function creararray(arrayusuario){
    if(arrayusuario.lenght > 0) {
        arrayusuario.push("jorge","oscar","david","manzana","casa","javascript","programacion");
    }

    arrayusuario.toString();
}

function introducirletra(){
    window.open("", "", "width=400px,height=300px,top=80px,left=800px");
}

function cambiarpalabra(){
    window.open("", "", "width=400px,height=300px,top=800px,left=800px");
}

document.write(arrayusuario);

