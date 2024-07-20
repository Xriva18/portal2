//Guarda y agrega

function GuardarUsuarioMantenimiento() {
    users.push({
        "id": users.length + 1,
        "name": $('#txtNombreCliente').val(),
        "cedula": $('#txtCedula').val(),
        "fecha": $('#txtFechaSolicitud').val(),
        "sucursal": $('#selSurcursal').val(),
        "tipo": $('#selMantenimientoMol').val(),
        "computadora": $('#selComputadoraMol').val(),
        "modelo": $('#txtModeloMol').val(),
        "recibe": $('#selRecibeMol').val(),
        "img": $('#previa').val(),
        "detalles": $('#txtDetallesModal').val(),
        "costo": $('#txtCostoMol').val(),
        "debe": $('#txtDebeMol').val(),
        "abono": $('#txtAbonoMol').val(),
        "direccion": $('#txtDireccion').val()
    });
    recorrerArray();
    alert($('#txtRecibe').val());
    swal('Mantenimiento Guardado');
    modal.style.display = "none";
    return;
}

//Usarios Recistrados
var users = [
    {
        id: 1, name: 'John', cedula: '05032146987', fecha: '2024-06-08', sucursal: 'Salcedo', direccion: 'Av. America',
        tipo: 'Preventivo', computadora: 'Dell', modelo: '1234fx',
        recibe: 'Juan', detalles: '', costo: '50.36', abono: '25.00', debe: '25.36', img: '1'
    },
    {
        id: 2, name: 'Lucas', cedula: '05522146987', fecha: '2024-05-08', sucursal: 'Latacunga', direccion: 'Av. America',
        tipo: 'Preventivo', debe: '50.86', computadora: 'Hp', modelo: 'D0034fx',
        recibe: 'Juan', detalles: '', costo: '50.36', abono: '25.00', debe: '25.36', img: '2'
    },
]

//Recorre apra agregar en lla tabla yd efine las columnas
function recorrerArray() {
    $('#listEmpleados').empty();
    for (var i = 0; i < users.length; i++) {
        var Botones = '<td width="5%" style="text-align:center;">' +
            '<div class="CeldasTabla" onclick="mostrarDatosUsuarioPorId(\'' + users[i].id + '\');">' +
            '<i class="bi bi-printer"></i>' +
            '</div>' +
            '</td>';
        newTr = '<tr class="text-center">' +

            '<td>' + users[i].id + '</td>' +
            '<td>' + users[i].name + '</td>' +
            '<td>' + users[i].fecha + '</td>' +
            '<td>' + users[i].tipo + '</td>' +
            '<td>' + users[i].debe + '</td>' +
            Botones +
            '</tr>';
        $('#listEmpleados').append(newTr);
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
    /*if ($('#txtNombreCliente').val() == '') {
        swal('Ingrese nombre del cliente');
        return;
    }
    if ($('#txtCedula').val() == '') {
        swal('Ingrese su cédula');
        return;
    }
    if ($('#txtFechaSolicitud').val() == '') {
        swal('Ingrese la fecha');
        return;
    }
    if ($('#selSurcursal').val() == '0') {
        swal('Ingrese la sucursal');
        return;
    }
    if ($('txtDireccion').val() == '') {
        swal('Ingrese la direccion');
        return;
    }*/

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

///Modal ------------------------------------------------------------------
// Array de rutas de imágenes
var imageArray = [
    "img/imagen5.jpg",
    "img/imagen6.jpg",
    "img/imagen7.jpg",
    "img/imagen8.jpg",
    "img/imagen9.jpg"
];

// Array para almacenar las imágenes en base64
const arrayBase64 = [];

// Función para convertir Blob a base64
function encodeFilesAsBase64URL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// Función para convertir imágenes a base64 y almacenarlas en arrayBase64
async function convertImagesToBase64() {
    for (let i = 0; i < imageArray.length; i++) {
        const response = await fetch(imageArray[i]);
        const blob = await response.blob();
        const base64 = await encodeFilesAsBase64URL(blob);
        arrayBase64.push(base64);
    }
}

// Ejecutar la conversión de imágenes y configurar el event handler
(async function () {
    await convertImagesToBase64();

    $('#selComputadoraMol').change(function () {
        switch ($(this).val()) {
            case '0':
                $("#previa").attr("src", "img/imagen11.jpg");
                break;
            case 'Dell':
                $("#previa").attr("src", arrayBase64[0]);
                break;
            case 'Hp':
                $("#previa").attr("src", arrayBase64[1]);
                break;
            case 'Asus':
                $("#previa").attr("src", arrayBase64[2]);
                break;
            case 'MSI':
                $("#previa").attr("src", arrayBase64[3]);
                break;
            case 'Apple':
                $("#previa").attr("src", arrayBase64[4]);
                break;
            default:
                $("#previa").attr("src", "img/imagen11.jpg");
        }
    });
})();


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


//Calculo de lo que se debe

function CalcularDebe() {
    if ($('#txtCostoMol').val() != '' && $('#txtAbonoMol').val() != '') {
        var Resultado = parseFloat($('#txtCostoMol').val()) - parseFloat($('#txtAbonoMol').val());
        $('#txtDebeMol').val(Resultado);
    }
}

//Sauldar
function seleccionarRow(idRegistro) {
    var seleccionado = users.filter(x => x.id == idRegistro);

    alert("Hola : " + seleccionado[0].name + " debe: " + seleccionado[0].debe);
}



function mostrarDatosUsuarioPorId(idBuscado) {

    alert(
        "ID: " + users[idBuscado - 1].id +
        "\nName: " + users[idBuscado - 1].name +
        "\nFecha: " + users[idBuscado - 1].fecha +
        "\nTipo: " + users[idBuscado - 1].tipo +
        "\nDebe: " + users[idBuscado - 1].debe +
        "\nSucursal: " + users[idBuscado - 1].sucursal +
        "\nDireccion: " + users[idBuscado - 1].direccion +
        "\nCedula: " + users[idBuscado - 1].cedula +
        "\nComputadora: " + users[idBuscado - 1].computadora +
        "\nModelo: " + users[idBuscado - 1].modelo +
        "\nImagen: " + users[idBuscado - 1].img +
        "\nRecibe: " + users[idBuscado - 1].recibe +
        "\nDetalles: " + users[idBuscado - 1].detalles +
        "\nCosto: " + users[idBuscado - 1].costo +
        "\nAbono: " + users[idBuscado - 1].abono
    );
}

