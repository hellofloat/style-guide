'use strict';

require('./styles/normalize.css');
require('./styles/skeleton.css');
require('./styles/custom.css');

var component = require('./components/component');
document.body.appendChild(component());