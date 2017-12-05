'use strict';
module.exports = (sequelize, DataTypes) => {
  var Leagues = sequelize.define('Leagues', {
    name: DataTypes.STRING,
    established: DataTypes.DATE,
    description: DataTypes.TEXT,
    teamCount: DataTypes.INTEGER,
    uniqueRules: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Leagues.associate = (models) => {
    Leagues.belongsTo(models.Users, {as:'LeagueOrganizer', foreignKey: 'leagueOrganizer'});
  }
  return Leagues;
};