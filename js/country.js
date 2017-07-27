window.onload=function(){
    var countries = new Array ("- Seleccione -","Antigua y Barbuda","Argentina","Bahamas","Barbados","Belice","Bolivia","Brasil","Canadá","Chile","Colombia","Costa Rica","Cuba","Dominica","Ecuador","El Salvador","Estados Unidos","Granada","Guatemala","Guyana","Haití","Honduras","Jamaica","México","Nicaragua","Panamá","Paraguay","Perú","República Dominicana","San Cristóbal y Nieves","San Vicente y las Granadinas","Santa Lucía","Surinam","Trinidad y Tobago","Uruguay", "Venezuela");
    var select = document.getElementById("country");
    for(var i=0;i<countries.length;++i){
        select.options[i]=new Option(countries[i]);
    }
}