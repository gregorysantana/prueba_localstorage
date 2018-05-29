function getContactos(){
    var listaDeContactos = localStorage.getItem("agenda");
    if(!listaDeContactos){ 
        listaDeContactos = [];//Si la lista de contactos aún no ha sido creada en el localStorage creamos un arreglo vacío
    }else{
        //Si ya existe la lista de contactos convertimos el STRING almacenado en el local Storage a un arreglo javascript para poder agregar más datos
        listaDeContactos = JSON.parse(listaDeContactos); 
    }
    return listaDeContactos;
}

function guardar(){
    var nombre = document.getElementById('txtNombre');
    var apellido = document.getElementById('txtApellido');
    var telefono = document.getElementById('txtTelefono');
    var listaDeContactos = getContactos();
    listaDeContactos.push({nombre:nombre.value, apellido:apellido.value, telefono:telefono.value});
    //Para guardar en el localStorage volvemos a a convertir a String nuestro listado de contactos ya que el localStorage solo almacena strings

    localStorage.setItem("agenda", JSON.stringify(listaDeContactos));     
    cargarContactos();
}

function cargarContactos(){
    var listaDeContactos = getContactos();
    var htmlGenerado = '';
    var llaves;
    for(var i = 0 ; i < listaDeContactos.length ; i++){     
        llaves = Object.keys(listaDeContactos[i]);
        for(var j = 0 ; j < llaves.length ; j++){     
            htmlGenerado += "<div class='filaContacto'> <span class='llave'>" + llaves[j] + "</span><span class='valor'>" +listaDeContactos[i][llaves[j]] +"</span></div>";
        }
        
    }
    var listado = document.getElementById('listado');
    listado.innerHTML = htmlGenerado;
}
