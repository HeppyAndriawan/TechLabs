// Accending (a to z / 1 to 10 ) order
const SortASC = async function (string, arr) {
  string = string.split(".");
  let len = string.length;

  arr.sort(function (a, b) {
    let i = 0;
    while (i < len) {
      a = a[string[i]];
      b = b[string[i]];
      i++;
    }
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
};

// Decending (z to a / 10 to 1 ) order
const SortDSC = async function (string, arr) {
  string = string.split(".");
  let len = string.length;

  arr.sort(function (a, b) {
    let i = 0;
    while (i < len) {
      a = a[string[i]];
      b = b[string[i]];
      i++;
    }
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  return arr;
};

module.exports = { SortASC, SortDSC };

/**
 * HOW TO USE
 * SortASC("PRODUCT_PLU", array/object);
 * SortDSC("PRODUCT_PLU", array/object);
 * PRODUCT_PLU IS INDEX NAME FROM THE ARRAY
 */
