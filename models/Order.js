import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Order = sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pendente', 'confirmado', 'enviado', 'entregue'),
    defaultValue: 'pendente'
  },
  shippingAddress: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: {
      address: '',
      city: '',
      state: '',
      zipCode: ''
    }
  },
  paymentMethod: {
    type: DataTypes.ENUM('cartao', 'boleto', 'pix'),
    allowNull: false
  }
}, {
  timestamps: true
});

export default Order; 