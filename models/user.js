module.exports = function(sequelize, DataType) {

    var User = sequelize.define('User', {
        
        email: { 
            type: DataType.STRING, 
            validate: { isEmail: true } 
        },

        password: { 
            type: DataType.STRING, 
            allowNull: false },
    });
    return User;
}