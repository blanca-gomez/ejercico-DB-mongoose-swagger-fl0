// importaremos los diferentes archivos y los exportaremos
const basicInfo = require('./basicInfo');
const tasks = require('./tasks');
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...tasks,
    ...components
};
