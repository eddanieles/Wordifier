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

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  if (transforms[number]) {
    return transforms[number];
  }
  else if (output.length === 6){
    var thousands = parseInt(output.splice(0, 3).join().replaceAll(",", ""));
    var rest = parseInt(output.join().replaceAll(",", ""));
    if (rest === 000) {
      return wordifier(thousands) + " thousand";
    } else {
      return wordifier(thousands) + " thousand " + wordifier(rest);
    }
  }
  else if (output.length === 5){
    var thousands = parseInt(output.splice(0, 2).join().replaceAll(",", ""));
    var rest = parseInt(output.join().replaceAll(",", ""));
    if (rest === 000) {
      return wordifier(thousands) + " thousand";
    } else {
      return wordifier(thousands) + " thousand " + wordifier(rest);
    }
  }
  else if (output.length === 4){
    var thousands = output.splice(0, 1);
    var rest = parseInt(output.join().replaceAll(",", ""));
    if (rest === 000) {
      return transforms[thousands] + " thousand";
    } else {
      return transforms[thousands] + " thousand " + wordifier(rest);
    }
  }
  else if (output.length === 3){
    var hundreds = output.splice(0, 1);
    var rest = parseInt(output.join().replaceAll(",", ""));
    if (rest === 00) {
      return transforms[hundreds] + " hundred";
    } else {
      return transforms[hundreds] + " hundred " + wordifier(rest);
    }
  }

  // else if (string.includes("hundred")) {
  //   var split = string.split(" hundred");
  //   var hundreds = split[0];
  //   var theRest = split[1].trim();
  //   if (theRest === "") {
  //     return transforms[hundreds] * 100;
  //   } else {
  //     return transforms[hundreds] * 100 + numberifier(theRest);
  //   }
  // }
  else {
    return transforms[output[0] * 10] + " " + transforms[output[1]];
  }

}

module.exports = wordifier;
