
let gastos = []
let gastoTotal = 0
let nombresUsados = []

const guardar = () => {
    const nombre = document.getElementById("nombre").value;
    const dinero = parseFloat(document.getElementById("dinero").value);

    
    gastos.push({
        nombre: nombre, 
        monto: dinero
    });

    gastoTotal += dinero
    
    debugger;

    if (nombresUsados.length == 0) {
        nombresUsados.push(nombre)
    }
    else {
        var nombreUsado = nombresUsados.find(nombreActual => {
            return nombreActual == nombre
        })

        if (nombreUsado == undefined) {
            nombresUsados.push(nombre)
        }
    }


    const lista = document.getElementById("lista")
    const li = document.createElement("li")
    li.textContent = `${nombre} gastó ${dinero}`
    lista.appendChild(li)

    const total=document.getElementById("gastoTotal")
    total.textContent = `Total gastado: ${gastoTotal}`

    const gastoUnitario = document.getElementById("gastoUnitario")
    console.log(gastoTotal / nombresUsados.length)
    gastoUnitario.textContent = `Cada uno debe aportar: ${gastoTotal / nombresUsados.length}`
}