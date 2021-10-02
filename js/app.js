const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const sign_in = document.querySelector('#sign-in');


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".sign-in-form").addEventListener('submit', validarFormulario); 
});
  
function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario-sign-in').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('clave-sign-in').value;
    if (clave.length == 0) {
      alert('No ha escrito ninguna clave');
      return;
    }
    if(usuario == "marcela" && clave == "1234"){
        this.submit();
    }
    else{
        alert('Usuario o contraseña no válidos');
    }
    
}

sign_up_btn.addEventListener("click", () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

sign_in.addEventListener("click", () =>{
    // alert("Hola");
    // window.open("principal.html");
});

