

document.getElementById("btn-agregar").addEventListener("click", () => {
    const precioAcumulado = 0;

    console.log("Estoy en el agregar");
    precioAcumulado = precioAcumulado + 0;

    if(precioAcumulado >= 500000){
        document.getElementById("prueba").addEventListener("click", () => {
            //acá va la lógica 
            console.log("Usuario desea realizar un pedido")
        });
    }else{
        console.log("No se puede el envio gratis");
    }
});