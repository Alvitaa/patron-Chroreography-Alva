const eventBus = require( "./eventBus.js");
const deliveryService = require( "./microservicios/delivery.js");
const inventoryService = require( "./microservicios/inventory.js");
const paymentService = require( "./microservicios/payment.js");
const notificationService = require( "./microservicios/notification.js");

paymentService();
deliveryService();
inventoryService();
notificationService();

const placeOrder = (order) => {
    console.log(`Nuevo pedido realizado para el producto ${order.productId}`);
    eventBus.emit('orderPlaced', order);
};

const order = {
    orderId: '1',
    productId: 'A',
    shippingAddress: 'Av. Avenida 123, Distrito de Lima'
};

placeOrder(order);