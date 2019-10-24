module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: { type: DataTypes.STRING, validate: { isEmail: true } },
        password: { type: DataTypes.STRING, allowNull: false },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username:
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    User.associate = function (models) {
        User.hasMany(models.Have, {
            onDelete: "cascade",
        });
    };
    User.associate = function (models) {
        User.hasMany(models.Want, {
            onDelete: "cascade",
        });
    };
    return User;
}