const obtenerValor = (bool) => { // si recibe 0 es venta o 1 compra
   
    var valorIngresado= parseFloat(document.getElementById("valor").value);
    var valorDolar;
    var txtValorFinal =document.getElementById("valorFinal");
    var valorFinal;
    var tipoAccion = bool;
    let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

    fetch(url)
        .then(response => response.json())
        .then(respuestaDecodificada => {
            console.log('entro')
            if(!tipoAccion){
                valorDolar = parseFloat(respuestaDecodificada[1]['casa']['venta']);
                console.log(valorDolar)
                valorFinal = valorIngresado * valorDolar;

                console.log(valorFinal)
                txtValorFinal.textContent = `Son  $${valorFinal}`
            }
            else if(tipoAccion){
                valorDolar = parseFloat(respuestaDecodificada[1]['casa']['compra']);
                console.log(valorDolar)
                valorFinal = valorIngresado * valorDolar;

                console.log(valorFinal)
                txtValorFinal.textContent = `Son  $${valorFinal}`
            }

        })
        .catch(error => console.log(error))
}
