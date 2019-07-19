'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      content: DataTypes.STRING,
      checked: DataTypes.BOOLEAN
    },
    {}
  );
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
