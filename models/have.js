module.exports = function (sequelize, DataType) {
    
    var Have = sequelize.define("Have", {
        itemID: {
            type: DataType.INTEGER,
            allowNull: false

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

    Have.associate = function (models) {
        Have.belongsTo(models.User, {
            onDelete: "cascade",
            foreignKey: {allowNull: false}
        });
    };
    return Have;
};      
