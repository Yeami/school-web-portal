const userRoute = require('./user');
const publicationRoute = require('./publication');
const teacherRoute = require('./teacher');
const positionRoute = require('./position');
const subjectRoute = require('./subject');
const classRoute = require('./class');

module.exports = (app) => {
  app.use('/users', userRoute);
  app.use('/publications', publicationRoute);
  app.use('/teachers', teacherRoute);
  app.use('/positions', positionRoute);
  app.use('/subjects', subjectRoute);
  app.use('/classes', classRoute);
};
