const eventBus = require( "../eventBus.js");

const paymentService = () => {
    eventBus.on('stockConfirmed', (order) => {
        console.log(`Pagos: Procesando el pago para el pedido ${order.orderId}...`);
        setTimeout(() => {
            const paymentSuccessful = true;
            if (paymentSuccessful) {
                console.log(`Pagos: Pago aprobado para el pedido ${order.orderId}`);
                eventBus.emit('paymentConfirmed', order);
            } else {
                console.log(`Pagos: Pago rechazado para el pedido ${order.orderId}`);
                eventBus.emit('paymentRejected', order);
            }
        }, 1500);
    });

    eventBus.on('stockReturned', (order) => {
        console.log(`Pagos: Pago devuelto para el pedido ${order.orderId}`);
        eventBus.emit('refundProcessed', order);
    });
};

module.exports = paymentService;