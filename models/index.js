import User from "./User.js";
import Order from './Order.js';
import OrderItem from './OrderItem.js';
import Product from './Product.js';

// Relação entre User e Order (Um usuário pode ter vários pedidos)
User.hasMany(Order, {
  foreignKey: 'userId',
  as: 'orders'
});
Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

// Relação entre Order e OrderItem (Um pedido pode ter vários itens)
Order.hasMany(OrderItem, {
  foreignKey: 'orderId',
  as: 'items'
});
OrderItem.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order'
});

// Relação entre Product e OrderItem
Product.hasMany(OrderItem, {
  foreignKey: 'productId',
  as: 'orderItems'
});
OrderItem.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product'
});

export {
  User,
  Order,
  OrderItem,
  Product
};