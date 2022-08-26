// const precioOriginal = 120
// const descuento = 18

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function btnPrecioConDescuento(){
    const precio = document.getElementById("inputPrice").value
    const descuento = document.getElementById("inputDiscount").value

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento)
    document.getElementById("ResultP").innerText = "El precio con descuento es $"+ precioConDescuento
}

// console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento})

function onClickButtonPriceDiscount() {
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const precio = document.getElementById("inputPrice").value

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

}