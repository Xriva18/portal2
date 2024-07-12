$('.irArriba').click(function () {
    //alert("¡Hola! Has hecho clic en el botón.");
    $('html, body').animate({ scrollTop: 0 }, 0, 'easeInOutExpo'); // $('html, body').animate({ scrollTop: posicion }, tiempo, 'easeInOutExpo', suaviza);
    return false;
});