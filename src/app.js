const InstrumentFamilies = require("./models/instrument_families.js");
const SelectView = require("./views/select_view.js");
const InstrumentView = require("./views/instrument_view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#instrument-families');
  const FamilyDropdown = new SelectView(selectElement);
  FamilyDropdown.bindEvents();


  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();
});
