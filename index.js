const sound = require('soundex-code');

/**
 * Try to figure out what on earth people mean when send us jibberish.
 *
 * @param  {Array} argh The different arguments that are supported.
 * @param  {String} jbberish The weird command they send us.
 * @return {String|Null} A matching thing.
 * @public
 */
function matey(argh, jibberish) {
  const target = sound(jibberish);
  let arg;
  let i;

  for (i = 0; i < argh.length; i++) {
    arg = sound(argh[i]);

    if (arg === target) return argh[i];
  }

  return null;
}

//
// Expose all the interfaces.
//
module.exports = matey;
