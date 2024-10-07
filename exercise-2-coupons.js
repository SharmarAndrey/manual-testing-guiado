const coupons = [
	{
		code: "HOTEL2024",
		experience: "Noche en un hotel de 5 estrellas",
		expirationDate: "2025-12-31",
		redeemed: false
	},
	{
		code: "SPA2024",
		experience: "Sesión de spa y masaje de 90 minutos",
		expirationDate: "2025-11-30",
		redeemed: false
	},
	{
		code: "DINNER2024",
		experience: "Cena gourmet para dos personas",
		expirationDate: "2025-10-15",
		redeemed: true
	},
	{
		code: "FLIGHT2024",
		experience: "Vuelo en globo aerostático",
		expirationDate: "2025-09-30",
		redeemed: false
	},
	{
		code: "WINE2024",
		experience: "Cata de vinos premium",
		expirationDate: "2025-08-31",
		redeemed: false
	},
	{
		code: "SKI2024",
		experience: "Día completo de esquí en estación de montaña",
		expirationDate: "2025-07-31",
		redeemed: true
	},
	{
		code: "YOGA2024",
		experience: "Clase privada de yoga y meditación",
		expirationDate: "2025-06-30",
		redeemed: false
	},
	{
		code: "CRUISE2024",
		experience: "Crucero de 3 días por el Mediterráneo",
		expirationDate: "2025-05-31",
		redeemed: false
	},
	{
		code: "THEATER2024",
		experience: "Entradas VIP para una obra de teatro",
		expirationDate: "2025-04-30",
		redeemed: false
	},
	{
		code: "BUNGEE2024",
		experience: "Salto en bungee desde un puente",
		expirationDate: "2025-03-31",
		redeemed: false
	},
	{
		code: "PARAGLIDE2024",
		experience: "Vuelo en parapente sobre la costa",
		expirationDate: "2025-12-15",
		redeemed: true
	},
	{
		code: "KARTING2024",
		experience: "Carrera de karting con amigos",
		expirationDate: "2025-11-20",
		redeemed: false
	},
	{
		code: "SAFARI2024",
		experience: "Safari fotográfico en una reserva natural",
		expirationDate: "2021-10-05",
		redeemed: false
	},
	{
		code: "GOLF2024",
		experience: "Clase privada de golf con un profesional",
		expirationDate: "2025-09-15",
		redeemed: false
	},
	{
		code: "PAINTBALL2024",
		experience: "Partida de paintball para 5 personas",
		expirationDate: "2021-08-10",
		redeemed: false
	},
	{
		code: "HELICOPTER2024",
		experience: "Vuelo panorámico en helicóptero",
		expirationDate: "2025-07-05",
		redeemed: false
	},
	{
		code: "ESCAPEROOM2024",
		experience: "Escape room con temática futurista",
		expirationDate: "2021-06-25",
		redeemed: false
	},
	{
		code: "SURF2024",
		experience: "Clase de surf en una playa paradisíaca",
		expirationDate: "2025-05-15",
		redeemed: false
	},
	{
		code: "DIVING2024",
		experience: "Buceo en arrecifes de coral",
		expirationDate: "2025-04-05",
		redeemed: false
	},
	{
		code: "MUSIC2024",
		experience: "Concierto privado con una banda local",
		expirationDate: "2025-03-01",
		redeemed: true
	}
];


/**
 * Un cupón es válido si se cumplen estas 3 condiciones:
 * 
 * 1. Existe en la base de datos
 * 2. No ha sido canjeado con anterioridad
 * 3. No está caducado 
 * 
 * @param {string} coupon Cupón a comprobar
 * @returns {bool} true | false 
 */
const isValidCoupon = (code) => {


	// TODO
	let existCoupon = coupons.find(coupon => coupon.code === code)
	if (!existCoupon) {
		return false;

	}
	const currentDate = new Date();
	const expirationDate = new Date(existCoupon.expirationDate);
	if (expirationDate < currentDate) {
		console.log(`El cupón ${code} ha caducado.`);
		return false;
	}

	if (existCoupon.redeemed) {
		console.log(`El cupón ${code} ya ha sido canjeado.`);
		return false;

	}


	return true;
}

console.log("Cupón que existe, no está caducado y es válido. Debería devolver true:", isValidCoupon('HOTEL2024')); // true
console.log("Cupón que ya fecha esta caducada. Debería devolver false:", isValidCoupon('PAINTBALL2024')); // false
console.log("Cupón que ya fue canjeado. Debería devolver false:", isValidCoupon('MUSIC2024')); // false
console.log("Cupón que no existe. Debería devolver false:", isValidCoupon('NONEXISTENT')); // false
