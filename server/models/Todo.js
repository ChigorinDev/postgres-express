'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      content: DataTypes.STRING,
      checked: DataTypes.BOOLEAN
    },
    {
      // disable the modification of table names; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );

  return Todo;
};
