//funcionalidad <a> 
$('.irArriba').click(function () {
    //alert("¡Hola! Has hecho clic en el botón.");
    $('html, body').animate({ scrollTop: 0 }, 0, 'easeInOutExpo'); // $('html, body').animate({ scrollTop: posicion }, tiempo, 'easeInOutExpo', suaviza);
    return false;
});
//<Mostrar componentes>
$('.clickLink').click(function () {
    var id = $(this).attr('id');
    $('#header-carousel').show();
    $("#dvInicio").hide();
    $("#dvContacto").hide();
    $("#dvRePersonal").hide();
    $("#dvSolVacaciones").hide();
    $('#dvPrestamo').hide();
    $('#myModal').hide();
    $('#EspacioOcultar').hide();

    if (id == 'lnkInicio') {
        $("#dvInicio").show();
        $('#header-carousel').show();
        $('#myModal').hide();
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 0, 'easeInOutExpo');
        return false;
    }
    if (id == 'lnkMantenimiento') {
        $("#paginaMantenimientoMat").show();
        $('#header-carousel').hide();
    }

    if (id == 'lnkPrestamos') {
        $('#dvPrestamo').show();
        $('#header-carousel').hide();
        $('#EspacioOcultar').show();
    }

    if (id == 'lnkPersonal') {
        $('#dvRePersonal').show();
        $('#header-carousel').hide();
    }
    if (id == 'lnkContacto') {
        $('#dvRePersonal').show();
        $('#header-carousel').hide();
    }


});

