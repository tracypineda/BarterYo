module.exports = function (sequelize, DataType) {
    var Want = sequelize.define("Want", {
        userID: {
            type: DataType.INTEGER,
            allowNull: false
        },
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
    return Want;
};      
