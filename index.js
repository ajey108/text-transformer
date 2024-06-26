// index.js

/**
 * For uppercase.
 * @param {string} str - The string to convert.
 * @returns {string} - The uppercase string.
 */
function toUpperCase(str) {
    return str.toUpperCase();
}

/**
 * For lowercase.
 * @param {string} str - The string to convert.
 * @returns {string} - The lowercase string.
 */
function toLowerCase(str) {
    return str.toLowerCase();
}

module.exports = {
    toUpperCase,
    toLowerCase
};
