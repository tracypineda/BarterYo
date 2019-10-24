module.exports = function (sequelize, DataTypes) {

    var Have = sequelize.define("Have", {
        // id: {
        //     type:DataTypes.INTEGER,
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
        },
        username: {
            type: DataTypes.STRING
        }
    });

    Want.associate = function (models) {
        Want.belongsTo(models.User, {
            foreignKey: "username",
            allowNull: false
        });
    };
    return Have;
};      
