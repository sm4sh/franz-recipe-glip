'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const elements = document.querySelectorAll('div.new');
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].style['visibility'] === "") {
          count += parseInt(elements[i].innerText) || 0;
        }
      }
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
