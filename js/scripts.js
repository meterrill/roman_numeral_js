var romanNumeral = function(number) {
  var splitNumber = number.split("");
  for (var i = splitNumber.length; i < 4; i++) {
    splitNumber.unshift("0");
  }

  var thousands = parseInt(splitNumber[0]);
  var hundreds = parseInt(splitNumber[1]);
  var tens = parseInt(splitNumber[2]);
  var ones = parseInt(splitNumber[3]);
  var numerals = "";
  var numeralGroups = [[hundreds, "C", "D", "M"], [tens, "X", "L", "C"], [ones, "I", "V", "X"]];

  for (var i = thousands; i > 0; i--) {
    numerals += "M";
  }

  numeralGroups.forEach(function(group) {
    if (group[0] < 4) {
      for (var i = group[0]; i > 0; i--) {
        numerals += group[1];
      }
    } else if (group[0] === 4) {
      numerals += group[1] + group[2];
    } else if (group[0] === 9) {
      numerals += group[1] + group[3];
    } else {
      numerals += group[2];
      for (var i = group[0] - 5; i > 0; i--) {
        numerals += group[1];
      }
    }
  });

  return numerals;
};
