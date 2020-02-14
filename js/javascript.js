(function AutomaticSlides() {
    let slideIndex = 1;
    const timer = 2000;
  
    // obtiene la cantidad total de slides. si añades un nuevo slide, no hace falta tocar el código.
    const slides = document.getElementsByClassName("glitch");
  
    const sliderChecked = i =>
      document.querySelector(`.glitch:nth-of-type(${i})`);
  
    function RecursiveSlides() {
      // si el index es igual al total de slides, resetea el index a 1, de lo contrario incrementa.
      slideIndex == slides.length ? (slideIndex = 1) : ++slideIndex;
  
      // setea el slide anterior como falso. en caso que el index sea 1, setea el último slide como false.
      if (slideIndex == 1) sliderChecked(slides.length).classList.add('hide');
      else sliderChecked(slideIndex - 1).classList.add('hide');
  
      // setea el siguiente slide como true
      sliderChecked(slideIndex).classList.remove('hide');
      // función recursiva
      setTimeout(RecursiveSlides, timer);
    }
  
    // ejecuta la función recursiva por primera vez
    RecursiveSlides();
  })();

  /////////////////////////////////

  // Cambiar de color el CSS al hacer scroll
  "use strict";

  const htmlTag = document.querySelector('html');
  const bodyTag = document.querySelector('body');
  const myNav = document.querySelector('nav');
  const myElem = document.querySelectorAll('nav li a');
  const logoVelkro = document.querySelector('.logo-velkro');
  const since = document.querySelector('.since');
  const iconWha = document.getElementById('whatsapp');
  const iconFac = document.getElementById('facebook');
  const iconIns = document.getElementById('instagram');
  const iconEnv = document.getElementById('envelope');

  let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100);
  }
  
  addEventListener('scroll',() => {
    // Cambia de color el fondo del menú
    // myNav.style.setProperty('background', scrolled() > 50 ? "var(--color2)" : "var(--color1)");

    // Cambia de color el texto de todos los "li a" del menú
    let i;
    for (i = 0; i < myElem.length; i++) {
      myElem[i].style.setProperty('color', scrolled() > 50 ? "var(--color4)" : "var(--color3)");
    }

    // Cambia de color el "since"
    since.style.setProperty('color', scrolled() > 50 ? "var(--color4)" : "var(--color3)");
    // Cambia el Isologo Velkro
    function cambiarLogos() {
      if (scrolled() > 50) {
        logoVelkro.src = "images/velkro-logo-black.svg";
        iconWha.classList.add('whatsapp-black');
        iconWha.classList.remove('whatsapp');
        iconFac.classList.add('icon-facebook-black');
        iconFac.classList.remove('icon-facebook');
        iconIns.classList.add('icon-instagram-black');
        iconIns.classList.remove('icon-instagram');
        iconEnv.classList.add('icon-envelope-black');
        iconEnv.classList.remove('icon-envelope');
      } else {
        logoVelkro.src = "images/velkro-logo.svg";
        iconWha.classList.remove('whatsapp-black');
        iconWha.classList.add('whatsapp');
        iconFac.classList.remove('icon-facebook-black');
        iconFac.classList.add('icon-facebook');
        iconIns.classList.remove('icon-instagram-black');
        iconIns.classList.add('icon-instagram');
        iconEnv.classList.remove('icon-envelope-black');
        iconEnv.classList.add('icon-envelope');
      }
    }
    cambiarLogos()
  })
