//Detalles
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
    if ($(this).val() == '6') {
        $("#previa").attr("src", "img/imagen10.jpg");
        return;
    }
});