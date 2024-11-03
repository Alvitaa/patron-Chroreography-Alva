const eventBus = require( "../eventBus.js");

const deliveryService = () => {
    eventBus.on('paymentConfirmed', (order) => {
        console.log(`Envíos: Preparando el envío para el pedido ${order.orderId}...`);
        setTimeout(() => {
            const orderOK = false;
            if(orderOK) {
                console.log(`Envíos: Pedido ${order.orderId} enviado a ${order.shippingAddress}`);
                eventBus.emit('orderShipped', order);
            } else {
                console.log(`Envíos: El pedido ${order.orderId} fue cancelado.`);
                eventBus.emit('orderCanceled', order);
            }
        }, 2000);
    });

    eventBus.on('refundProcessed', (order) => {
        console.log(`Envíos: El pedido ${order.orderId} fue cancelado correctamente después de las devoluciones.`);
    });
};

module.exports = deliveryService;