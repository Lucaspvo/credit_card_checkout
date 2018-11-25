/**
 * Function to change the receiving string to
 * all upper case letters
 * @param  {string} value string to be upper cased
 * @return {string}       string upper cased
 */
export const upperCase = function(value) {

  return value.toUpperCase();

};

/**
 * Function to check and change the receiving string to
 * only digits
 * @param  {string} value string to be checked/changed
 * @return {string}       string modified
 */
export const digitsOnly = function(value) {

  return value.replace(/[^0-9\s]/gi, '');

};

/**
 * Function to check and change the receiving string to
 * only characters
 * @param  {string} value string to be checked/changed
 * @return {string}       string modified
 */
export const charactersOnly = function(value) {

  return value.replace(/[^a-z\s]/gi, '');

};
