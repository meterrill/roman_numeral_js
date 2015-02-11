var romanNumeral = function(number) {
  var splitNumber = number.split("");
  for (var i = splitNumber.length; i < 4; i++) {
    splitNumber.unshift("0");
  }

  var thousands = parseInt(splitNumber[0]);
  var hundreds = parseInt(splitNumber[1]);
  var tens = parseInt(splitNumber[2]);
  var ones = parseInt(splitNumber[3]);
  var numerals = ""

  for (var i = thousands; i > 0; i--) {
    numerals += "M";
  }

  if (hundreds < 4) {
    for (var i = hundreds; i > 0; i--) {
      numerals += "C";
    }
  } else if (hundreds === 4) {
    numerals += "CD";
  } else if (hundreds === 9) {
    numerals += "CM";
  } else {
    numerals += "D";
    for (var i = hundreds - 5; i > 0; i--) {
      numerals += "C";
    }
  }

  if (tens < 4) {
    for (var i = tens; i > 0; i--) {
      numerals += "X";
    }
  } else if (tens === 4) {
    numerals += "XL";
  } else if (tens === 9) {
    numerals += "XC";
  } else {
    numerals += "L";
    for (var i = tens - 5; i > 0; i--) {
      numerals += "X";
    }
  }


  return numerals;
};
