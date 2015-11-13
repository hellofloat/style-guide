'use strict';

require('./component.css');

module.exports = function() {
    var el = document.createElement('h1');

    el.innerHTML = '<a class="button button-primary" href="javascript:;">Hello World</a>';

    return el;
};