const InstrumentFamilies = require("./models/instrument_families.js");
const SelectView = require("./views/select_view.js");
const InstrumentView = require("./views/instrument_view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const display = document.querySelector("div#display-info");
  const familyInfoDisplay = new InstrumentView(display);
  familyInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();
});
