window.addEventListener("load",()=>{
    ActualizarImgLampara();
    EventoChangeParaCambioDeImagen();

    //la idea es con AJAX recibir el estado actual de la lamparita, cambiarlo y al recibirlo de nuevo recibirlo ya cambiado
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}); 

function ActualizarImgLampara(){
    var valor = document.getElementById("myonoffswitch").checked;
    if (valor == true)
        document.getElementById("lampara").setAttribute("src","./img/luzOn.jpg");
    else{
        document.getElementById("lampara").setAttribute("src","./img/luzOff.jpg");
    }
}

function EventoChangeParaCambioDeImagen(){
    document.getElementById("myonoffswitch").addEventListener("change",()=>{
        
        var valor = document.getElementById("myonoffswitch").checked;
        ActualizarImgLampara();
        //console.log(valor);

    });
}