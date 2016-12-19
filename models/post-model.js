"use strict";

module.exports = function(sequelize, DataTypes){
	const Post = sequelize.define("Post",{
		title: DataTypes.STRING,
		body: DataTypes.STRING
	})
	return Post;
};
