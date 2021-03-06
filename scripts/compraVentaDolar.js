const obtenerValor = (tipoAccion) => { // si recibe 0 es venta o 1 compra
   
    var valorIngresado= parseFloat(document.getElementById("valor").value);
    var valorDolar;
    var txtValorFinal =document.getElementById("valorFinal");
    var valorFinal;
    let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

    fetch(url)
        .then(response => response.json())
        .then(respuestaDecodificada => {
            if(tipoAccion == 0){
                valorDolar = parseFloat(respuestaDecodificada[1]['casa']['venta']);
                console.log(valorDolar)
                valorFinal = valorIngresado * valorDolar;

                console.log(valorFinal)
                txtValorFinal.textContent = `Son  $${valorFinal}`
            }
            else if(tipoAccion == 1){
                valorDolar = parseFloat(respuestaDecodificada[1]['casa']['compra']);
                console.log(valorDolar)
                valorFinal = valorIngresado * valorDolar;

                console.log(valorFinal)
                txtValorFinal.textContent = `Son  $${valorFinal}`
            }

        })
        .catch(error => console.log(error))
}

const obtenerCotizacionActual = (tipoAccion) =>{ // si recibe 0 es venta o 1 compra

    var cotizacionActualP= document.getElementById("valorCotizacionActual");

    let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

    fetch(url)
        .then(response => response.json())
        .then(respuestaDecodificada => {
            if(tipoAccion == 0){
                valorDolar = respuestaDecodificada[1]['casa']['venta'];
                console.log(valorDolar)
                cotizacionActualP.textContent = `Cotizacion actual: 1 u$s = ${valorDolar}`
            }
            else if(tipoAccion ==1 ){
                valorDolar = respuestaDecodificada[1]['casa']['compra'];
                console.log(valorDolar)
                cotizacionActualP.textContent = `Cotizacion actual: 1 u$s = ${valorDolar}`
            }

        })
        .catch(error => console.log(error))
}