module.export = function (sequelize, DataType) {
    var Want = sequelize.define("Want", {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        itemID: {
            type: DataTypes.INTEGER,
            allowNull: false

        }, itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        itemCategory: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Want;
};      
