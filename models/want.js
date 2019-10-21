module.exports = function (sequelize, DataType) {
    var Want = sequelize.define("Want", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        }, itemName: {
            type: DataType.STRING,
            allowNull: false
        },
        itemDescription: {
            type: DataType.TEXT,
            allowNull: false
        },
        itemCategory: {
            type: DataType.STRING,
            allowNull: false
        }
    });

Want.associate = function (models) {
    Want.belongsTo(models.User, {
        foreignKey: {allowNull: false}
    });
};
return Want;
};      
