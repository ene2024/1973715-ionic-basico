const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const contrasenia = document.getElementById('contraseña');


 form.addEventListener( 'submit', ev => {
     ev.preventDefault();
     validateInputs();
 } );


const setError = message => {
    const errorDisplay = document.getElementById("salida");
   errorDisplay.innerText = message;
};

const validateInputs = () => {
    const usuarioValue = usuario.value.trim();
    const contraseniaValue = contrasenia.value.trim();

    if( usuarioValue === '' && contraseniaValue === ''){
        setError("Nombre de usuario y contraseña requeridas");
    } else if( usuarioValue === '' ) {
        setError('Nombre de usuario requerido');
    } else if( contraseniaValue === '') {
        setError('Contraseña requerida');
    }
}

function login() {
    const username = document.getElementById('usuario').value;
    success('Inicio de sesion correcto ' + username);
}

function register() {
    const username = document.getElementById('usuario').value;
    success('Registro exitoso ' + username);
}

function success( message) {

    const messageDiv = document.getElementById('salida');
    messageDiv.innerHTML = message;
}