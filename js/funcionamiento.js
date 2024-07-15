
//Usarios Recistrados
var users = [
    { id: 1, name: 'John', date: "20/05/24", tipo: 'Preventivo', debe: '50.86' },
    { id: 2, name: 'Lenny', date: "15/06/24", tipo: 'Preventivo', debe: '25.50' },
    { id: 3, name: 'Andrew', date: "15/06/24", tipo: 'Correctivo', debe: '32.50' },
    { id: 4, name: 'Peter', date: "13/07/24", tipo: 'Correctivo', debe: '15.80' },
    { id: 5, name: 'Anna', date: "13/07/24", tipo: 'Preventivo', debe: '13.96' },
    { id: 6, name: 'Albert', date: "13/07/24", tipo: 'Preventivo', debe: '21.75' },
]

//Recorre apra agregar en lla tabla yd efine las columnas
function recorrerArray() {
    $('#listEmpleados').empty();
    for (var i = 0; i < users.length; i++) {
        var Botones = '<td width="5%" style="text-align:center;">' +
            '<div class="CeldasTabla" onclick="seleccionarRow(\'' + users[i].id + '\');">' +
            '<i class="bi bi-printer"></i>' +
            '</div>' +
            '</td>';
        newTr = '<tr class="text-center">' +

            '<td>' + users[i].id + '</td>' +
            '<td>' + users[i].name + '</td>' +
            '<td>' + users[i].date + '</td>' +
            '<td>' + users[i].tipo + '</td>' +
            '<td>' + users[i].debe + '</td>' +
            Botones +
            '</tr>';
        $('#listEmpleados').append(newTr);
    }
}




//Sauldar
function seleccionarRow(idRegistro) {
    var seleccionado = users.filter(x => x.id == idRegistro);

    alert("Hola : " + seleccionado[0].name + " debe: " + seleccionado[0].email);
}

//Guarda y agrega
//function GuardarUsuario() {
//    alert("Usuario guardado");
//    users.push({
//        "id": users.length + 1, "name": $('#txtModNombreUsuario').val(),
//        "age": $('#txtModEdadUsuario').val(),
//        "tipo": $('#txtModOcupacionUsuario').val()
//    });
//    recorrerArray();
//    modal.style.display = "none";
//}

//Guarda y agrega
function GuardarUsuarioMantenimiento() {

    users.push({
        "id": users.length + 1,
        "name": $('#txtModNombreUsuario').val(),
        "fecha": $('#txtFechaSolicitud').val(),
        "tipo": $('#selMantenimientoMol').val(),
        "debe": $('#txtDebeMol').val()
    });
    recorrerArray();
    swal('Mantenimiento Guardado');
    modal.style.display = "none";
    return;
}


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
