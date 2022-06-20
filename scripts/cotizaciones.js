
const obtenerCotizacionActual = () => {

    var divCompra;
    var divVenta;
    var valorDolarCompra;
    var valorDolarVenta;
    var posDolar=0;
    let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

    fetch(url)
        .then(response => response.json())
        .then(respuestaDecodificada => {

            console.log(respuestaDecodificada)
            for (var i = 0; i < 5; i++) {
                 if(i == 2){posDolar=3}
                 if(i == 4){posDolar=6}
             
                valorDolarCompra = respuestaDecodificada[posDolar]['casa']['compra'];
                divCompra = document.getElementById(`precioCompra${i + 1}`);
                divCompra.textContent = `$${valorDolarCompra}`

                valorDolarVenta = respuestaDecodificada[posDolar]['casa']['venta'];
                divVenta = document.getElementById(`precioVenta${i + 1}`);
                divVenta.textContent = `$${valorDolarVenta}`

                posDolar++
            }
        })
        .catch(error => console.log(error))
}