// Versión actualizada
function saludar(nombre) {

    const fecha = new Date();
    const hora = fecha.getHours();
    let saludo;

    if (hora >= 6 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 20) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    console.log(`${saludo}, ${nombre}`);
}

const nombre = process.argv[2] || "Mundo";
saludar(nombre);
