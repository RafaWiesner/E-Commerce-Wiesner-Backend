import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";
import bcrypt from "bcrypt";

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("USER", "ADMIN"),
    defaultValue: "USER",
  },
});

// Método para verificar a senha
User.prototype.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Hook para hash da senha antes de salvar
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

export default User; 