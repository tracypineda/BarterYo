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
        itemPhoto: {
            type: DataTypes.BLOB,
        }
    });

    Have.associate = function (models) {
        Have.belongsTo(models.User, {
            foreignKey: { allowNull: false }
        });
    };
    return Have;
};      
