const userRoute = require('./user');
const publicationRoute = require('./publication');
const teacherRoute = require('./teacher');
const positionRoute = require('./position');

module.exports = (app) => {
  app.use('/users', userRoute);
  app.use('/publications', publicationRoute);
  app.use('/teachers', teacherRoute);
  app.use('/positions', positionRoute);
};
