function wordifier(number){
  var transforms = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  }

  var output = [],
      sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
  }

  if (transforms[number]) {
    return transforms[number];
  }
  else if (output.length === 3){
    var hundreds = output.splice(0, 1);
    var rest = parseInt(output.join());
    return transforms[hundreds] + " hundred" + wordifier(rest);
  }
  else {
    return transforms[output[0] * 10] + " " + transforms[output[1]];
  }

}

module.exports = wordifier;
