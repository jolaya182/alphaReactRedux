/* *
  title: movieModel.js 

  date: 7/24/2019

  author:  javier olaya

  description: this model handles the schema for the movie modal
         
 */
const keys = require('../keys/nodeKeys');

const Sequalize = require('sequelize');
const sequelize = new Sequalize(`${keys.db_connectString}`);
sequelize.authenticate()
.then(()=>console.log("successful connection"))
.catch((error)=>console.error("unable to connect:", error));

const Movie = sequelize.define(
'movie',
{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  title:{
    type:Sequalize.STRING
  },
  year:{
    type:Sequalize.STRING
  },
  plot:{
    type:Sequalize.STRING
  },
  picturesrc:{
    type:Sequalize.STRING
  },
  rating:{
    type:Sequalize.INTEGER
  },
  comments:{
    type:Sequalize.STRING
  },
  imdbID:{
    type:Sequalize.INTEGER
  },
  createdAt:{
    type:Sequalize.DATE
  },
  updatedAt:{
    type:Sequalize.DATE
  }
}
);
module.exports = Movie;