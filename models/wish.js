
module.exports = function(sequelize, DataTypes) {
    var Wish = sequelize.define("Wish", {
      wish_name:{ 
        type:DataTypes.STRING,
        allowNull: false,
      },
      made: {
        type:DataTypes.BOOLEAN, 
        defaultValue: false
      }
    }, 
      {
        timestamps: false
      }
  );
    return Wish;
  };
  