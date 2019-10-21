module.exports = function(sequelize, DataType) {

    var Item = sequelize.define("Example", {

      item: DataType.STRING,
      description: DataType.TEXT
    });

    return Item;
  };