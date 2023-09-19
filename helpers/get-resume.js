/**
 *
 * @param {string} text - text to be shortened
 * @param {number} length - default 50
 */
function getResume(text, length = 50) {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

module.exports = {
  getResume,
}
