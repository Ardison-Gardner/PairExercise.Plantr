const db = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced.');
    db.close();
  })
  .catch(error => {
    console.log('Disater! Something went wrong!');
    console.error(error);
    db.close();
  });
