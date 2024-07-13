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
    function recorrerArray() {
        $('#listEmpleados').empty();
        for (var i = 0; i < users.length; i++) {
            var Botones = '<td width="5%" style="text-align:center;">' +
                '<div class="CeldasTabla" onclick="seleccionarRow(\'' + users[i].id + '\');">Saludar</div></td>';
            newTr = '<tr class="text-center">' +

                '<td>' + users[i].name + '</td>' +
                '<td>' + users[i].age + '</td>' +
                '<td>' + users[i].occupation + '</td>' +
                Botones +
                '</tr>';
            $('#listEmpleados').append(newTr);
        }
    }
    return false;
});