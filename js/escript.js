//Ejecutar función en el evento clic
document.getElementById("btn_open").addEventListener("click", open_close_menu);


//Declaramos de variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var main = document.getElementById("content");

//Enlace de YouTube
document.getElementById("btn_youtube").addEventListener("click", function(){
    // main.innerHTML = ;
    window.open("https://www.youtube.com/watch?v=UK4DgzYkHXM");
});


//cargar contenidos en el main

// carga contenido de inicio en main
document.getElementById("btn_inicio").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_inicio.html" scrolling="yes"></iframe>';
});
// carga contenido de mapa mental en main
document.getElementById("btn_mapa").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_mapa.html" scrolling="yes"></iframe>';
});
// carga contenido de perfil en main
document.getElementById("btn_perfil").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_perfil.html" scrolling="yes"></iframe>';
});
// carga contenido de rutas en main
document.getElementById("btn_rutas").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_rutas.html" scrolling="yes"></iframe>';
});
// carga contenido de foro en main
document.getElementById("btn_foro").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_foros.html" scrolling="yes"></iframe>';
});
// carga contenido de calificaciones en main
document.getElementById("btn_calif").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_calificaciones.html" scrolling="yes"></iframe>';
});
// carga contenido de cronograma y calendario en main
document.getElementById("btn_calend").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_calendario.html" scrolling="yes"></iframe>';
});
// carga contenido de contacto y mapa en main
document.getElementById("btn_contacto").addEventListener("click", function(){
    main.innerHTML = '<iframe src="m_contacto.html" scrolling="yes"></iframe>';
});
// boton salir
document.getElementById("btn_salir").addEventListener("click", function(){
    window.open('index.html', '_self');
});

// evento para mostrar y ocultar menú
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}


// si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}


// haciendo el menú responsive (adaptable)

window.addEventListener("resize", function(){
    
    if (window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});