const deliveryService = (order) => {
    console.log(`Envíos: Preparando el envío para el pedido ${order.orderId}...`);
    setTimeout(() => {
        console.log(`Envíos: Pedido ${order.orderId} enviado a ${order.shippingAddress}`);
    }, 2000);
};

const inventoryService = (order) => {
    console.log(`Inventario: Verificando stock para el producto ${order.productId}...`);
    setTimeout(() => {
        console.log(`Inventario: Stock confirmado para el producto ${order.productId}`);
    }, 1000);
};

const paymentService = (order) => {
    console.log(`Pagos: Procesando el pago para el pedido ${order.orderId}...`);
    setTimeout(() => {
        const paymentSuccessful = true;
        if (paymentSuccessful) {
            console.log(`Pagos: Pago aprobado para el pedido ${order.orderId}`);
        } else {
            console.log(`Pagos: Pago rechazado para el pedido ${order.orderId}`);
        }
    }, 1500);
};

const placeOrder = (order) => {
    console.log(`Nuevo pedido realizado para el producto ${order.productId}`);
    //Inventario
    inventoryService(order);
    //Pago
    paymentService(order);
    //Delivery
    deliveryService(order);
};

const order = {
    orderId: '1',
    productId: 'A',
    shippingAddress: 'Av. Avenida 123, Distrito de Lima'
};

placeOrder(order);