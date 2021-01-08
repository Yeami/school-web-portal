const userRoute = require('./user');
const publicationRoute = require('./publication');
const teacherRoute = require('./teacher');

module.exports = (app) => {
  app.use('/users', userRoute);
  app.use('/publications', publicationRoute);
  app.use('/teachers', teacherRoute);
};
