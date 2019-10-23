module.exports = function (sequelize, DataTypes) {
    var Want = sequelize.define("Want", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true

        // }, 
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

Want.associate = function (models) {
    Want.belongsTo(models.User, {
        foreignKey: {allowNull: false}
    });
};
return Want;
};      
