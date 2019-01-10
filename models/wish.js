module.exports = function(sequelize, DataTypes) {
    var Wish = sequelize.define("Wish", {
      wish_name: DataTypes.STRING,
      made: {type:DataTypes.BOOLEAN, defaultValue: false
      },

    });
    return Wish;
  };
  