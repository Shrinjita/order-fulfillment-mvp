// Sample data
const inventory = [
    { productId: 'P001', name: 'Product 1', stock: 100 },
    { productId: 'P002', name: 'Product 2', stock: 50 },
    { productId: 'P003', name: 'Product 3', stock: 75 },
];

const orders = [
    { orderId: 'O001', productId: 'P001', quantity: 2, status: 'Pending' },
    { orderId: 'O002', productId: 'P003', quantity: 1, status: 'Shipped' },
];

const shipments = [
    { shipmentId: 'S001', orderId: 'O002', status: 'In Transit' },
];

// Function to populate inventory table
function loadInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.productId}</td>
            <td>${item.name}</td>
            <td>${item.stock}</td>
        `;
        inventoryList.appendChild(row);
    });
}

// Function to populate orders table
function loadOrders() {
    const orderList = document.getElementById('order-list');
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.productId}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
        `;
        orderList.appendChild(row);
    });
}

// Function to populate shipments table
function loadShipments() {
    const shipmentList = document.getElementById('shipment-list');
    shipments.forEach(shipment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shipment.shipmentId}</td>
            <td>${shipment.orderId}</td>
            <td>${shipment.status}</td>
        `;
        shipmentList.appendChild(row);
    });
}

// Initialize tables on page load
document.addEventListener('DOMContentLoaded', () => {
    loadInventory();
    loadOrders();
    loadShipments();
});
