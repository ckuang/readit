"use strict";

module.exports = function(sequelize, DataTypes){
	const Comment = sequelize.define("Comment",{
		comment: DataTypes.STRING,
		PostId: DataTypes.INTEGER
	},
		{
			classMethods: {
				associate: function(models){
					Comment.belongsTo(models.Post,{
						onDelete: "CASCADE",
						foreignKey:{
							allowNull:false
						}
					})
				}
			}
		}
	);
	return Comment;
};
