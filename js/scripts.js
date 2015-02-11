var romanNumeral = function(number) {
  var thousands = Math.floor(number / 1000);
  var hundreds = Math.floor((number - (thousands * 1000)) / 100);
  var numberGroups = [thousands, hundreds, 0, 0];
  var numerals = ""

  for (var i = thousands; i > 0; i--) {
    numerals += "M";
  }

  for (var i = hundreds; i > 0; i--) {
    numerals += "C";
  }

  return numerals;
};
