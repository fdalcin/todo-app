const application = require('./config/application');

require('./config/database');
require('./config/routes')(application);
