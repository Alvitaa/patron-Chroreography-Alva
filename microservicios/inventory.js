const eventBus = require( "../eventBus.js");

const inventoryService = () => {
    eventBus.on('orderPlaced', (order) => {
        console.log(`Inventario: Verificando stock para el producto ${order.productId}...`);
        setTimeout(() => {
            console.log(`Inventario: Stock confirmado para el producto ${order.productId}`);
            eventBus.emit('stockConfirmed', order);
        }, 1000);
    });

    eventBus.on('PaymentRejected', (order) => {
        console.log(`Inventario: Devolviendo producto al inventario ${order.productId}...`);
    })
    
    eventBus.on('orderCanceled', (order) => {
        console.log(`Inventario: Devolviendo producto al inventario ${order.productId}...`);
        eventBus.emit('stockReturned', order);
    })
};

module.exports = inventoryService;