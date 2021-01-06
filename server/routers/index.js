const userRoute = require('./user');
const publicationRoute = require('./publication');

module.exports = (app) => {
  app.use('/users', userRoute);
  app.use('/publications', publicationRoute);
};
