const { db, Gardener, Plot, Vegetable } = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced.');
  })
  .then(() => Vegetable.create({
    name: 'Carrot',
    color: 'Orange'
  }))
  .then(() => Vegetable.create({
    name: 'Potato',
    color: 'Brown'
  }))
  .then(() => Vegetable.create({
    name: 'Radish',
    color: 'Red'
  }))
  .then(() => Vegetable.create({
    name: 'Artichoke',
    color: 'Green'
  }))
  .then(() => Vegetable.create({
    name: 'Eggplant',
    color: 'Purple'
  }))
  .catch(error => {
    console.log('Disater! Something went wrong!');
    console.error(error);
    db.close();
  });

