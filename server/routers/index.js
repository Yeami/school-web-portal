const userRoute = require('./user');

module.exports = (app) => {
  app.use('/users', userRoute);
};
