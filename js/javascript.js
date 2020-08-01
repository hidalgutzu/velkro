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

  

       // 2. This code loads the IFrame Player API code asynchronously.
       var tag = document.createElement('script');

       tag.src = "https://www.youtube.com/iframe_api";
       var firstScriptTag = document.getElementsByTagName('script')[0];
       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
       // 3. This function creates an <iframe> (and YouTube player)
       //    after the API code downloads.
       var player;
       function onYouTubeIframeAPIReady() {
         player = new YT.Player('player', {
           height: '390',
           width: '640',
           videoId: YOUR_ID_HERE,
           playerVars: {
             controls: 0,
             showinfo:0,
             rel:0,
           },
           events: {
             'onReady': onPlayerReady,
           }
         });
       }
 

//Youtube Modal script
