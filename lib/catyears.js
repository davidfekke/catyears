'use strict';

function catyears(originalCatAge) {
    return originalCatAge >= 2 ? 25 + (originalCatAge - 2) * 4 : originalCatAge > 1 ? (originalCatAge - 1) * 10 + 15 : originalCatAge * 15;
}

module.exports = catyears;
