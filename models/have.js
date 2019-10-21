module.exports = function (sequelize, DataType) {

    var Have = sequelize.define("Have", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        itemName: {
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

    Have.associate = function (models) {
        Have.belongsTo(models.User, {
            foreignKey: { allowNull: false }
        });
    };
    return Have;
};      
