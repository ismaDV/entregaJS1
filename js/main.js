// Función para ingresar cosas y que se muestren en una lista en un alert
function ingresarNombres() {
    let datosIngresado = ''; 
    let sigueIngresando = true; 
    
    // el ususario ingresa el dato
    while (sigueIngresando) {
        //dato ingresados
    
    let datoIngresado = prompt('Por favor, ingrese un Dato que quiera agregar a la lista, Al final presione enter nuevamente para que se muestre la lista:');
        
        //Para ver si ingreso algo 
        if (datoIngresado !== null && datoIngresado !== '') {
            
            datosIngresado += datoIngresado + '\n';
        } else {
            // si presiona enter sin nada se termina el ciclo
            sigueIngresando = false;
        }
    }
    
    // Mostramos los datos ingresados en lista, en un alert
    alert('LISTA:\n\n' +datosIngresado);
}

// la funcion :)
ingresarNombres();
