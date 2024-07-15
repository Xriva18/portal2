
//Guarda y agrega



function tipoMantenimiento() {
    var tipo
    if ($('#selMantenimientoMol').val() == '1') {
        tipo = "Preventivo";
        return tipo;
    }
    if ($('#selMantenimientoMol').val() == '2') {
        tipo = "Correctivo";
        return tipo;
    }

}
function GuardarUsuarioMantenimiento() {

    users.push({
        "id": users.length + 1,
        "name": $('#txtNombreCliente').val(),
        "fecha": $('#txtFechaSolicitud').val(),
        "tipo": tipoMantenimiento(),
        "debe": $('#txtDebeMol').val()
    });
    recorrerArray();
    //alert($('#txtFechaSolicitud').val());
    swal('Mantenimiento Guardado');
    modal.style.display = "none";
    return;
}

//Usarios Recistrados
var users = [
    { id: 1, name: 'John', fecha: '2024-06-08', tipo: 'Preventivo', debe: '50.86' },
    { id: 2, name: 'Lenny', fecha: '2024-12-03', tipo: 'Preventivo', debe: '25.50' },
    { id: 3, name: 'Andrew', fecha: '2024-15-04', tipo: 'Correctivo', debe: '32.50' },
    { id: 4, name: 'Peter', fecha: '2024-16-08', tipo: 'Correctivo', debe: '15.80' },
    { id: 5, name: 'Anna', fecha: '2024-18-09', tipo: 'Preventivo', debe: '13.96' },
    { id: 6, name: 'Albert', fecha: '2024-20-17', tipo: 'Preventivo', debe: '21.75' },
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
            '<td>' + users[i].fecha + '</td>' +
            '<td>' + users[i].tipo + '</td>' +
            '<td>' + users[i].debe + '</td>' +
            Botones +
            '</tr>';
        $('#listEmpleados').append(newTr);
    }
}