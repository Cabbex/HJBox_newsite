var shortside;
var longside;
var height;

$('#kostnadsform').submit(function () {
 collectValues();
 return false;
});

function collectValues(){
    longside = document.getElementById("långinput").value;
    shortside = document.getElementById("kortinput").value;
    height = document.getElementById("höjdinput").value;
}
