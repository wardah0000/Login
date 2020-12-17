const {timeStamp} = require('console');
const {Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize('mydatabase', '', '', {
  dialect: 'sqlite',
  storage: './database.sqlite',  // or ':memory:'
  logging: false
});


const Credentials = sequelize.define(
    'Credentials', {
      // Model attributes are defined here
      email: {type: DataTypes.STRING, allowNull: false},
      password: {
        type: DataTypes.STRING,
        allowNull: false

      }
    },
    {});


async function createUser(email, password) {
  return (async () => {
    await sequelize.sync();
    result =
        await Credentials.count({attributes: ['email'], where: {email: email}});
    if (result == 0) {
      await Credentials.create({email: email, password: password});
      return 'User created successfully';
    } else {
      return 'User already exists.';
    }
  })();
}



exports.createUser = createUser;