module.exports = function(sequelize, DataTypes) {

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

        }
    });

    Have.associate = function(models) {
        models.Have.belongsTo(models.User);
    };
    return Have;
};