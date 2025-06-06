import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

export default Product; 