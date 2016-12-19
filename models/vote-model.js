"use strict";

module.exports = function(sequelize, DataTypes){
	const Vote = sequelize.define("Vote",{
		vote: DataTypes.INTEGER
	},
		{
			classMethods: {
				associate: function(models){
					Vote.belongsTo(models.Post,{
						onDelete: "CASCADE",
						foreignKey:{
							allowNull:false
						}
					})
				}
			}
		}
	);
	return Vote;
};
