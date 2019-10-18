module.exports = function(sequelize, DataType) {
    var User = sequelize.define('User', {
        email: { type: Sequelize.STRING, validate: { isEmail: true } },
        password: { type: Sequelize.STRING, allowNull: false },
    });
    return User;
}