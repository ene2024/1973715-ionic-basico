
var campoTexto = document.getElementById("miTxt");

function principal(){
    var texto = campoTexto.value;
    console.log(texto);
}

function eliminar() {
    campoTexto.value = "";
}

principal();