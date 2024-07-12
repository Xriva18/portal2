$("#ExcepcionObservacion").hide();
$("#chkExcepcion").change(function () {
    if (this.checked) {
        $("#ExcepcionObservacion").show();
    }
    else {
        $("#ExcepcionObservacion").hide();
    }
});