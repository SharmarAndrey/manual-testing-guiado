
/**
 * 
 * @param {number} totalPrice El valor total de la compra 
 * @returns {number} Devuelve los euros que le podemos aplicar de descuento 
 */
function calculateDiscount(price) {

	let discount = 0;

	// Implementar Iteración 1A

	if (price >= 1000) {
		discount = price * 0.1;

	} else if (
		price >= 500 && price < 1000) {
		discount = price * 0.05;
	} else {
		discount = 0;
	}

	return discount;
}

calculateDiscount();
/* console.log("Pruebo para 750€, debería aplicar un 5% de descuento y obtener: 37.5", calculateDiscount(750)); // 37.5
console.log("Pruebo para 5000€, debería aplicar un 10% de descuento y obtener el valor: 500", calculateDiscount(5000)); // 500, pues 500 es el 10% de 5000
console.log("Pruebo para 1000€, debería aplicar un 10% de descuento y obtener el valor: 100", calculateDiscount(1000)); // 100 , pues 100 es el 10% de 1000
console.log(calculateDiscount(100)); // 0, pues no llegamos al mínimo para obtener un descuento
console.log(calculateDiscount(0)); // 0
console.log(calculateDiscount(999.99)); // 49.999500000000005, edge case -> caso límite */

function calculateTotal(basePrice, voucher) {

	let totalPrice = 0;
	let priceWithVoucher = 0;
	const envio = 5;

	if ((voucher === 10 || voucher === 20 || voucher === 0) && basePrice > 0) {

		priceWithVoucher = basePrice - voucher;
		totalPrice = priceWithVoucher - calculateDiscount(priceWithVoucher) + envio;
		return totalPrice;
	} else if (basePrice <= 0) {
		console.log('El precio base debe ser mayor que cero.');
		return 0;
	} else {
		console.log('El voucher no es válido.');
		return 0;
	}
}
console.log("Total con 1500€ de base y un voucher de 10€:", calculateTotal(1500, 10)); // Debería restar el voucher y aplicar el descuento
console.log("Total con 750€ de base y sin voucher:", calculateTotal(750, 0)); // Debería aplicar solo el descuento
console.log("Prueba con 0€ de base:", calculateTotal(0, 0)); // Debe mostrar un mensaje de error por basePrice <= 0
