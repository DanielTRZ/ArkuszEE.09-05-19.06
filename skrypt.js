function generuj(){

var a = document.getElementById("wyraz1").value;
   // a = parseInt("wyraz1");
var b = document.getElementById("wyraz2").value;
   // b = parseInt("wyraz2");
var c = document.getElementById("wyraz3").value;
   // c = parseInt("wyraz3");
var d ="";

for( i=1; i <= c; i++){
    
  d+=a*1+(i-1)*b+", ";
    
 
}
document.getElementById("wynik").innerHTML=d;
}