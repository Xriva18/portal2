//Detalles
$("#dvDetallesMol").hide();
$("#chkDetallesMol").change(function () {
    if (this.checked) {
        $("#dvDetallesMol").show();
    }
    else {
        $("#dvDetallesMol").hide();
    }
});

//Imagen
$('#selComputadoraMol').change(function () {
    if ($(this).val() == '0') {
        $("#previa").attr("src", "img/imagen11.jpg");
        return;
    }
    if ($(this).val() == '1') {
        $("#previa").attr("src", "img/imagen5.jpg");
        return;

    }
    if ($(this).val() == '2') {
        $("#previa").attr("src", "img/imagen6.jpg");
        return;

    }
    if ($(this).val() == '3') {
        $("#previa").attr("src", "img/imagen7.jpg");
        return;

    }
    if ($(this).val() == '4') {
        $("#previa").attr("src", "img/imagen8.jpg");
        return;

    }
    if ($(this).val() == '5') {
        $("#previa").attr("src", "img/imagen9.jpg");
        return;

    }
});


//Calculo d eloq ue se debe

function CalcularDebe() {
    if ($('#txtCostoMol').val() != '' && $('#txtAbonoMol').val() != '') {
        var Resultado = parseFloat($('#txtCostoMol').val()) - parseFloat($('#txtAbonoMol').val());
        $('#txtDebeMol').val(Resultado);
    }
}


//Guarda y agrega
function GuardarUsuarioMantenimiento() {

    users.push({
        "id": users.length + 1, "name": $('#txtModNombreUsuario').val(),
        "age": $('#txtModEdadUsuario').val(),
        "tipo": $('#txtModOcupacionUsuario').val()
    });
    recorrerArray();
    swal('Mantenimiento Guardado');
    modal.style.display = "none";
    return;
}