const eventBus = require( "../eventBus.js");

const notificationService = () => {
    eventBus.on('orderPlaced', (order) => {
        console.log(`Notificaciones: Enviando notificación al cliente que el pedido ${order.orderId} ha sido ingresado.`);
        setTimeout(() => {
            console.log(`Notificaciones: Notificación enviada para el pedido ${order.orderId}`);
        }, 500);
    });
    eventBus.on('stockConfirmed', (order) => {
        console.log(`Notificaciones: Enviando notificación de inventario al cliente para el pedido ${order.orderId}`);
        setTimeout(() => {
            console.log(`Notificaciones: Notificación enviada para el pedido ${order.orderId}`);
        }, 500);
    });
    eventBus.on('paymentConfirmed', (order) => {
        console.log(`Notificaciones: Enviando notificación al cliente sobre el pago del pedido ${order.orderId}`);
        setTimeout(() => {
            console.log(`Notificaciones: Notificación enviada para el pedido ${order.orderId}`);
        }, 500);
    });
    eventBus.on('orderShipped', (order) => {
        console.log(`Notificaciones: Enviando notificación de envío al cliente para el pedido ${order.orderId}`);
        setTimeout(() => {
            console.log(`Notificaciones: Notificación enviada para el pedido ${order.orderId}`);
        }, 500);
    });
};

module.exports = notificationService;