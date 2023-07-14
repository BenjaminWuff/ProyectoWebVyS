/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

// Initiate the wowjs
new WOW().init();

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.custom-navbar').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.custom-navbar').removeClass('navtop').css('top', '-100px');
    }
});

//DESPLAZAMIENTOS
// Espera a que el documento se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene todos los enlaces de la barra de navegación principal
    var enlacesNav = document.querySelectorAll('nav a');

    // Agrega controladores de eventos a los enlaces de la barra de navegación principal
    for (var i = 0; i < enlacesNav.length; i++) {
        enlacesNav[i].addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            scrollSmooth(this.getAttribute('href'));
        });
    }

    // Obtiene todos los enlaces de la barra de navegación en el footer
    var enlacesFooter = document.querySelectorAll('footer a');

    // Agrega controladores de eventos a los enlaces de la barra de navegación en el footer
    for (var i = 0; i < enlacesFooter.length; i++) {
        enlacesFooter[i].addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            scrollSmooth(this.getAttribute('href'));
        });
    }

    // Función para realizar el desplazamiento suave
    function scrollSmooth(destino) {
        // Verifica si el destino es una sección en la misma página o una página diferente
        if (destino.startsWith('#')) {
            // Desplazamiento suave hacia la sección de destino con un ajuste de 100 píxeles hacia arriba
            var destinoElement = document.querySelector(destino);
            var offset = destinoElement.offsetTop - 100;

            // Verifica si la página actual es contacto.html
            if (window.location.pathname.includes('contacto.html')) {
                // Redirige a index.html y realiza el desplazamiento después de un breve momento
                window.location.href = 'index.html';
                setTimeout(function () {
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                }, 500); // Ajusta el tiempo de espera según sea necesario
            } else {
                // Desplazamiento suave en la misma página
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        } else {
            // Redirige a la página de destino
            window.location.href = destino;
        }
    }
});
