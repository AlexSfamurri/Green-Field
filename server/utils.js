/* create a helper function
that makes an apit call to goole
with a value that is a string of a location
that then retturns the response object with the lat and log
*/
const request = require('request');


const getCoords = (address, callback) => {
  const options = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`, options, callback);
};

module.exports.getCoords = getCoords;
