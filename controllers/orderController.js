import { Order, OrderItem } from '../models/index.js';

export const createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Lista de itens inválida' });
    }
    if (!shippingAddress || !shippingAddress.address || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode) {
      return res.status(400).json({ message: 'Endereço de entrega inválido' });
    }
    if (!paymentMethod || !['cartao', 'boleto', 'pix'].includes(paymentMethod)) {
      return res.status(400).json({ message: 'Método de pagamento inválido' });
    }
    if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) {
      return res.status(400).json({ message: 'Valor total inválido' });
    }

    const order = await Order.create({
      userId: req.user.id,
      totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'pendente'
    });

    const orderItems = items.map(item => ({
      orderId: order.id,
      productId: item.id,
      productName: item.name,
      price: item.price,
      quantity: item.quantity,
      productImage: item.image
    }));
    await OrderItem.bulkCreate(orderItems);

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      order: {
        id: order.id,
        totalAmount: order.totalAmount,
        status: order.status
      }
    });
  } catch (error) {
    next(error);
  }
};

export const listOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      include: [{ model: OrderItem, as: 'items' }]
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      },
      include: [{ model: OrderItem, as: 'items' }]
    });
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const order = await Order.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    order.status = status;
    await order.save();
    res.json({ message: 'Status atualizado', order });
  } catch (error) {
    next(error);
  }
}; 