module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define('User', {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true},
        email: { type: Sequelize.STRING, validate: { isEmail: true } },
        password: { type: Sequelize.STRING, allowNull: false },
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