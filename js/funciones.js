document.addEventListener('DOMContentLoaded', (event) => {
    const inputFile = document.querySelector('#input-foto');
    const image = document.querySelector('#previa');
    var base64URL = [];

    async function encodeFilesAsBase64URL(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('loadend', () => {
                resolve(reader.result);
            });
            reader.readAsDataURL(file);
        });
    };

    //Eventos
    inputFile.addEventListener('input', async (event) => {
        //Convierte la primera imagen en el input en una ruta Base 64
        base64URL = await encodeFilesAsBase64URL(inputFile.files[0]);
        image.setAttribute('src', base64URL);
    });
});


function Inscripcion() {
    var vName = document.getElementById('inptName');
    var vEdad = document.getElementById('inptEdad');
    var vFechaNac = document.getElementById('inptFechNac');
    var vFacultad = document.getElementById('cbxFacultad');
    var vCarrera = document.getElementById('cbxCarrera');
    var vMasculino = document.getElementById('rbMasculino');
    var vFemenino = document.getElementById('rbFemenino');
    /* vName.style.background = 'white';
     if(vName.value == ''){
         alert("Ingrese su nombre");
         vName.style.background = 'rgb(227, 103, 103)';
         return;
     }
     vEdad.style.background = 'white';
     if(vEdad.value == ''){
         alert("Ingrese su edad");
         vEdad.style.background = 'rgb(227, 103, 103)';
         return;
     }
     vFechaNac.style.background = 'white';
     if(vFechaNac.value == ''){
         alert("Ingrese su fecha de nacimeinto");
         vFechaNac.style.background = 'rgb(227, 103, 103)';
         return;
     }
     vFacultad.style.background = 'white';
     if(vFacultad.value == ''){
         alert("Seleccion su facultad");
         vFacultad.style.background = 'rgb(227, 103, 103)';
         return;
     }
     vCarrera.style.background = 'white';
     if(vCarrera.value == ''){
         alert("Seleccion su facultad");
         vCarrera.style.background = 'rgb(227, 103, 103)';
         return;
     }
 
    document.getElementById('lblMasculino').style.color = 'white';
    document.getElementById('lblFemenino').style.color = 'white';
     if(vFemenino.checked || vMasculino.checked){
         return;
     }else{
         alert("Seleccione un genero")
         document.getElementById('lblFemenino').style.color = 'rgb(227, 103, 103)';
         document.getElementById('lblMasculino').style.color = 'rgb(227, 103, 103)';
     }*/

    //generador de pdf
    var doc = new jsPDF();
    var y = 20;
    var x = 20;
    var margenX = 65;
    doc.setFont('HELVETICA');
    doc.setFontStyle('bold');
    doc.setFontSize(18);
    doc.text(76, y, 'Registro Estudiantil');
    y += 13;
    doc.setFontSize(12);
    doc.setFontStyle('times');
    doc.setFontStyle('bold');
    doc.text(x, y, 'Nombre:');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Edad: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Fecha de nacimiento: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Facultad: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Carrera: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Sexo: ');
    doc.text(margenX, y, '|');
    y += 10;
    doc.text(x, y, 'Foto: ');
    doc.text(margenX, y, '|');
    y += 10;

    var sexo;

    margenX = 70;
    y = 33;
    doc.setFontStyle('normal');
    doc.text(margenX, y, vName.value);
    y += 10;
    doc.text(margenX, y, vEdad.value);
    y += 10;
    doc.text(margenX, y, vFechaNac.value);
    y += 10;
    doc.text(margenX, y, vFacultad.value);
    y += 10;
    doc.text(margenX, y, vCarrera.value);
    y += 10;
    if (vFemenino.checked) {
        sexo = vFemenino.value
    } else {
        sexo = vMasculino.value
    }
    doc.text(margenX, y, sexo);
    y += 10;

    var nombreArchivo = 'Regitro.pdf';
    doc.save(nombreArchivo);

}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById('lblOnlyNum').style.color = 'yellow';
        return false;
    }
    document.getElementById('lblOnlyNum').style.color = 'rgba(255, 255, 255, 0.715)';
    return true;
}

function isAlfa(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById('lblOnlyAlfa').style.color = 'rgba(255, 255, 255, 0.715)';
        return true;
    }
    document.getElementById('lblOnlyAlfa').style.color = 'yellow';
    return false;
}

function validar() {

}