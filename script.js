const TELEFONO_WHATSAPP = "541130541746";

function comprarProducto(nombreProducto) {
    const mensaje = encodeURIComponent(`Hola Oasis Urbano! Quisiera encargar el siguiente producto: ${nombreProducto}. ¿Cómo coordino el pago por transferencia y la entrega?`);
    window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, '_blank');
}
