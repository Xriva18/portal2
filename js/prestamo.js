$("#ExcepcionObservacion").hide();
$("#chkExcepcion").change(function () {
    if (this.checked) {
        $("#ExcepcionObservacion").show();
    }
    else {
        $("#ExcepcionObservacion").hide();
    }
});

//Valdiacion de numero
function isAlfa(evt) {
    evt = evt || window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return true;
    }
    return false;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    };
    return true;

}

var controlValorPrestamo = document.querySelector('#txtValorPrestamo');
controlValorPrestamo.onkeydown = function (event) {
    if (!isNumber(event) && event.key != "Backspace") {
        event.preventDefault();
    }
};


var letraControl = document.getElementById('txtNombreCliente');
letraControl.onkeydown = function (event) {
    if (!isAlfa(event) && event.key != "Backspace") {
        event.preventDefault();
    }
};


var numeroCedula = document.querySelector('#txtCedula');
numeroCedula.onkeydown = function (event) {
    if (isNaN(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
};

var anioTrabajoControl = document.querySelector('#txtAnioTrabajo');
anioTrabajoControl.onkeydown = function (event) {
    if (isNaN(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
}

//PDF
function GenerarPDF() {
    if ($('#txtNombreCliente').val() == '') {
        swal('El nombre no puede estar vacio');
        return;
    }

    if ($('#txtAnioTrabajo').val() == '') {
        swal('Los años de trabajo no pueden estar vacio');
        return;
    }

    var x = $("#chkExcepcion").is(":checked");

    if (x != true) {
        if (parseInt($('#txtAnioTrabajo').val()) < 2) {
            swal('No tiene los años suficientes para solicitar un prestamo');
            return;
        }
    }
    else {
        if ($('#txtObservacion').val() == '') {
            swal('Solicito excepción debe ingresar la causa');
            return;
        }
    }

}