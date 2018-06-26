const PubSub = require("../helpers/pub_sub.js");

const InstrumentView = function(container){
  this.container = container;
};

InstrumentView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-family-ready', (evt) => {
    const family = evt.detail;
    console.log(family);
    this.render(family);
  });
};

InstrumentView.prototype.render = function(family){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${family.description} ${family.instruments} are all examples of ${family.name}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentView;
