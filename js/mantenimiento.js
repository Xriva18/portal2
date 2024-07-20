function getComputadoraValue() {
    var selectedValue = $('#selComputadoraMol').val();
    switch (selectedValue) {
        case 'Dell':
            return 1;
        case 'Hp':
            return 2;
        case 'Asus':
            return 3;
        case 'MSI':
            return 4;
        case 'Apple':
            return 5;
        default:
            return 0;
    }
}
//Guarda y agrega
function GuardarUsuarioMantenimiento() {
    ;

    if ($('#selMantenimientoMol').val() == '0') {
        swal('Ingrese el tipo de mantenimiento');
        return;
    }
    if ($('#selComputadoraMol').val() == '0') {
        swal('Ingrese la computadora');
        return;
    }
    if ($('#txtModeloMol').val() == '') {
        swal('Ingrese el modelo');
        return;
    }
    if ($('#selRecibeMol').val() == '0') {
        swal('Ingrese el empleado que recibe');
        return;
    }
    if ($('#txtCostoMol').val() == '') {
        swal('Ingrese el costo');
        return;
    }
    if ($('#txtAbonoMol').val() == '') {
        swal('Ingrese el abono');
        return;
    }
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
        "img": getComputadoraValue(),
        "detalles": $('#txtDetallesModal').val(),
        "costo": $('#txtCostoMol').val(),
        "debe": $('#txtDebeMol').val(),
        "abono": $('#txtAbonoMol').val(),
        "direccion": $('#txtDireccion').val()
    });
    recorrerArray();
    //alert($('#txtRecibe').val());
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
            '<div class="CeldasTabla" onclick="generarPDF(\'' + users[i].id + '\');">' +
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
    if ($('#txtNombreCliente').val() == '') {
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
    if ($('#txtDireccion').val() == '') {
        swal('Ingrese la direccion');
        return;
    }

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

function generarPDF(idBuscado) {
    var us = users[idBuscado - 1];
    var doc = new jsPDF();
    var y = 20;
    var x = 20;
    var margenX = 65;
    doc.setFont('HELVETICA');
    doc.setFontStyle('bold');
    doc.setFontSize(18);
    doc.text(76, y, 'Regsitro Mantenimiento');
    y += 13;
    doc.setFontSize(12);
    doc.setFontStyle('times');
    doc.setFontStyle('bold');
    doc.text(x, y, 'ID: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Name: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Fecha: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Tipo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Debe: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Sucursal: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Direccion: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Cedula: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Computadora: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Modelo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Costo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Abono: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Recibe (Empelado): ');
    doc.text(margenX, y, '|');
    y += 10;
    if (us.detalles != '') {
        doc.text(x, y, 'Detalles: ');
        doc.text(margenX, y, '|');
        y += 10;
    }
    margenX = 70;
    y = 33;
    doc.setFontStyle('normal');
    doc.text(margenX, y, '000' + us.id.toString());
    y += 10;
    doc.text(margenX, y, us.name.toString());
    y += 10;
    doc.text(margenX, y, us.fecha.toString());
    y += 10;
    doc.text(margenX, y, us.tipo.toString());
    y += 10;
    doc.text(margenX, y, '$' + us.debe.toString());
    y += 10;
    doc.text(margenX, y, us.sucursal.toString());
    y += 10;
    doc.text(margenX, y, us.direccion.toString());
    y += 10;
    doc.text(margenX, y, us.cedula.toString());
    y += 10;
    doc.text(margenX, y, us.computadora.toString());
    y += 10;
    doc.text(margenX, y, us.modelo.toString());
    y += 10;
    doc.text(margenX, y, '$' + us.costo.toString());
    y += 10;
    doc.text(margenX, y, '$' + us.abono.toString());
    y += 10;
    doc.text(margenX, y, us.recibe.toString());
    y += 10;
    doc.text(margenX, y, us.detalles.toString());
    y += 10;
    if (us.img != 0) {
        doc.addImage(arrayBase64[us.img - 1], 'JPEG', 120, 50, 50, 50);
    }
    var nombreArchivo = 'Mantenimiento_000' + us.id.toString() + '.pdf';
    doc.save(nombreArchivo);
    swal('PDF generado');
}

