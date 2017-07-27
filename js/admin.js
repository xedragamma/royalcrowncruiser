function tools(tool){
    switch(tool){
        case "bold":
            document.getElementById("texto").value=document.getElementById("texto").value+"[b][/b]";
            break;
        case "italic":
            document.getElementById("texto").value=document.getElementById("texto").value+"[i][/i]";
            break;
        case "underline":
            document.getElementById("texto").value=document.getElementById("texto").value+"[u][/u]";
            break;
        case "h1":
            document.getElementById("texto").value=document.getElementById("texto").value+"[h1][/h1]";
            break;
        case "h2":
            document.getElementById("texto").value=document.getElementById("texto").value+"[h2][/h2]";
            break;
        case "h3":
            document.getElementById("texto").value=document.getElementById("texto").value+"[h3][/h3]";
            break;
        case "h4":
            document.getElementById("texto").value=document.getElementById("texto").value+"[h4][/h4]";
            break;
        case "h5":
            document.getElementById("texto").value=document.getElementById("texto").value+"[h5][/h5]";
            break;
        case "h6":
            document.getElementById("texto").value=document.getElementById("texto").value+"[h6][/h6]";
            break;
        case "img":
            var x=prompt("Coloque el enlace del recurso");
            document.getElementById("texto").value=document.getElementById("texto").value+'[img="'+x+'"]';
            break;
        case "clip":
            var x=prompt("Coloque el enlace del video(YouTube)");
            document.getElementById("texto").value=document.getElementById("texto").value+'[video="'+x+'"]';
            break;
        case "link":
            var x=prompt("Coloque el enlace del recurso");
            document.getElementById("texto").value=document.getElementById("texto").value+'[a="'+x+'"]';
            break;
        case "swf":
            var x=prompt("Coloque el enlace del recurso");
            document.getElementById("texto").value=document.getElementById("texto").value+'[embed="'+x+'"]';
            break;
    }
}
function enterLine(event){
    var key=event.keyCode;
    if(key==13){
        document.getElementById("texto").value=document.getElementById("texto").value+"[br]";
    }
}