var fs = require('fs');

let getAllCountries = () => {
  return JSON.parse(fs.readFileSync('./country.json', 'utf8'));
}
module.exports.getAllCountries = getAllCountries;

let getAllStates = () => {
  return JSON.parse(fs.readFileSync('./state.json', 'utf8'));
}
module.exports.getAllStates = getAllStates;

let getStatesByCountryId = (id) => {
  let states = indexBy(getAllStates(), 'country_id');
  return states[id];
}
module.exports.getStatesByCountryId = getStatesByCountryId;

let getAllDistricts = () => {
  return JSON.parse(fs.readFileSync('./city.json', 'utf8'));
}
module.exports.getAllDistricts = getAllDistricts;

let getDistrictsByStateId = (id) => {
  let district = indexBy(getAllDistricts(), 'state_id');
  return district[id];
}
module.exports.getDistrictsByStateId = getDistrictsByStateId;


let indexBy = (array_val, key) => {
  let returnVal = {};
  array_val.forEach(item => {
    if(returnVal[item[key]]) {
      returnVal[item[key]].push(item)
    } else {
      returnVal[item[key]] = [item]
    }
  })
  return returnVal;
}
