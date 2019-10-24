module.exports = function (sequelize, DataTypes) {

    var Have = sequelize.define("Have", {
        itemName: {
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
        },
        username: {
            type: DataTypes.STRING
        }
    });

    Have.associate = function (models) {
        Have.belongsTo(models.User, {
            foreignKey: "username",
            allowNull: false
        });
    };
    return Have;
};      
