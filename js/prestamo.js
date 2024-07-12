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


function GenerarPDF() {
    /* if ($('#txtNombreCliente').val() == '') {
         swal('El nombre no puede estar vacio');
         return;
     }
 
     if ($('#txtAnioTrabajo').val() == '') {
         swal('Los años de trabajo no pueden estar vacio');
         return;
     }
     if ($('#ddlCuotas').val() == '0') {
         swal('Ingrese una cuota');
         return;
     }
     if ($('#ddlTipoPrestamo').val() == '0') {
         swal('Ingrese una cuota');
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
     }*/

    var doc = new jsPDF();
    var y = 20;
    var x = 20;
    var margenX = 65;
    doc.setFont('HELVETICA');
    doc.setFontStyle('bold');
    doc.setFontSize(18);
    doc.text(76, y, 'Solicitud de prestamo');
    y += 13;
    doc.setFontSize(12);
    doc.setFontStyle('times');
    doc.setFontStyle('bold');
    doc.text(x, y, 'Nombre del cliente:');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Cedula: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Tipo de prestamo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Años de trabajo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Valor del prestamo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Cuotas: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Excepción: ');
    doc.text(margenX, y, '|');
    y += 10;
    //Guardado
    var nombreArchivo = 'Registro.pdf';
    doc.save(nombreArchivo);

}