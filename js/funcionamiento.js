

//Apoarece d eprimera al tabla
$(document).ready(function () {
    recorrerArray();
    modal.style.display = "none";
});

$(document).ready(function () {

    $('ul li:has(ul)').hover(function (e) {
        $(this).find('ul').css({ display: "block" });
    },
        function (e) {
            $(this).find('ul').css({ display: "none" });
        });

    $("#slider").QCslider({ duration: 7000 });

    $("#dvInicio").show();
    $("#dvPrestamo").hide();
    $("#dvRePersonal").hide();
    $("#dvSolVacaciones").hide();
    $("#txtObservacion").hide();
    $("#lblObservacion").hide();
    recorrerArray();


});

function MostrarDiv(tipo) {
    if (tipo == 1) {
        $("#dvPrestamo").show();
        $("#dvRePersonal").hide();
        $("#dvSolVacaciones").hide();
    }

    if (tipo == 2) {
        $("#dvPrestamo").hide();
        $("#dvRePersonal").show();
        $("#dvSolVacaciones").hide();
    }

    if (tipo == 3) {
        $("#dvPrestamo").hide();
        $("#dvRePersonal").hide();
        $("#dvSolVacaciones").show();
    }

}


function CalcularCuota() {
    if ($('#txtValorPrestamo').val() != '' && $('#ddlCuotas').val() != '') {
        var Resultado = parseFloat($('#txtValorPrestamo').val()) / parseFloat($('#ddlCuotas').val());
        $('#txtCuotaMensual').val(Resultado);
    }
}

$("#ddlCuotas").change(function () {
    if ($('#txtValorPrestamo').val() != '' && $('#ddlCuotas').val() != '') {
        var Resultado = parseFloat($('#txtValorPrestamo').val()) / parseFloat($('#ddlCuotas').val());
        $('#txtCuotaMensual').val(Resultado);
    }
});

//var controlValorPrestamo = document.querySelector('#txtValorPrestamo');
//controlValorPrestamo.onkeydown = function (event) {
//    if (isNaN(event.key) && event.key != "Backspace") {
//        event.preventDefault();
//    }
//};
//
//var anioTrabajoControl = document.querySelector('#txtAnioTrabajo');
//anioTrabajoControl.onkeydown = function (event) {
//    if (isNaN(event.key) && event.key != "Backspace") {
//        event.preventDefault();
//    }
//};

//$("#chkExcepcion").change(function () {
//    if (this.checked) {
//        $("#txtObservacion").show();
//        $("#lblObservacion").show();
//    }
//    else {
//        $("#txtObservacion").hide();
//        $("#lblObservacion").hide();
//    }
//});

/*
$('#lnkVacaciones').click(function(){
      
}); 

$('#lnkPrestamos').click(function(){
      
}); 

$('#lnkPersonal').click(function(){
      
}); 
*/
