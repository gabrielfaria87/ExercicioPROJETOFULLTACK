const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Livro = sequelize.define(
  "Livro",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "livros",
    timestamps: false,
  }
);

module.exports = Livro;
