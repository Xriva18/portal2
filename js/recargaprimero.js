$(document).ready(function () {
    var id = $(this).attr('id');
    $('#header-carousel').show();
    $("#dvInicio").hide();
    $("#dvContacto").hide();
    $("#dvRePersonal").hide();
    $("#dvSolVacaciones").hide();
    $('#dvPrestamo').hide();
    $('#EspacioOcultar').hide();
    $("#ExcepcionObservacionPrest").hide();
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 0, 'easeInOutExpo');
    return false;
});