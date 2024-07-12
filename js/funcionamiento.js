
var users = [
    { id: 1, name: 'John', age: 25, occupation: 'gardener', email: 'echasiquiza@gmail.com' },
    { id: 2, name: 'Lenny', age: 51, occupation: 'programmer', email: 'echasiquiza2@gmail.com' },
    { id: 3, name: 'Andrew', age: 43, occupation: 'teacher', email: 'echasiquiza3@gmail.com' },
    { id: 4, name: 'Peter', age: 81, occupation: 'teacher', email: 'echasiquiza4@gmail.com' },
    { id: 5, name: 'Anna', age: 47, occupation: 'programmer', email: 'echasiquiza5@gmail.com' },
    { id: 6, name: 'Albert', age: 76, occupation: 'programmer', email: 'echasiquiza6@gmail.com' },
]

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



function seleccionarRow(idRegistro) {
    var seleccionado = users.filter(x => x.id == idRegistro);

    alert("Hola : " + seleccionado[0].name + " email: " + seleccionado[0].email);
}

function GuardarUsuario() {
    alert("Usuario guardado");
    users.push({
        "id": users.length + 1, "name": $('#txtModNombreUsuario').val(),
        "age": $('#txtModEdadUsuario').val(),
        "occupation": $('#txtModOcupacionUsuario').val()
    });
    recorrerArray();
    modal.style.display = "none";
}

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

var controlValorPrestamo = document.querySelector('#txtValorPrestamo');
controlValorPrestamo.onkeydown = function (event) {
    if (isNaN(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
};

var anioTrabajoControl = document.querySelector('#txtAnioTrabajo');
anioTrabajoControl.onkeydown = function (event) {
    if (isNaN(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
};

$("#chkExcepcion").change(function () {
    if (this.checked) {
        $("#txtObservacion").show();
        $("#lblObservacion").show();
    }
    else {
        $("#txtObservacion").hide();
        $("#lblObservacion").hide();
    }
});


function GenerarPDF() {
    if ($('#txtNombreCliente').val() == '') {
        swal('El Nombre no puede estar vacio');
        return;
    }

    if ($('#txtAnioTrabajo').val() == '') {
        swal('Los años de trabajo no puede estar vacio');
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
            swal('Solicito Excepción debe ingresar la causa');
            return;
        }
    }

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
$('#lnkVacaciones').click(function(){
      
}); 

$('#lnkPrestamos').click(function(){
      
}); 

$('#lnkPersonal').click(function(){
      
}); 
*/
