module.export = function (sequelize, DataType) {
    var Have = sequelize.define("Have", {
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

    Have.associate = function (models) {
        Have.belongsTo(models.User, {
            onDelete: "cascade",
            foreignKey: {allowNull: false}
        });
    };
    return Have;
};      
// User.hasMany (model.Want)