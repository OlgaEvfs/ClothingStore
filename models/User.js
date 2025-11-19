// Модель пользователя
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define(
        'User',
        {
            id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING(100), allowNull: false },
            email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
            password: { type: DataTypes.STRING(255), allowNull: false },
            rule: { type: DataTypes.ENUM('user', 'admin'), allowNull: false, defaultValue: 'user' }
        },
        {
            tableName: 'users',
            timestamps: true
        }
    );
    return User;
};