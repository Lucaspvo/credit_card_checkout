export const upperCase = function(value) {

  return value.toUpperCase();

};

export const digitsOnly = function(value) {

  return value.replace(/[^0-9\s]/gi, '');

};

export const charactersOnly = function(value) {

  return value.replace(/[^a-z\s]/gi, '');

};
