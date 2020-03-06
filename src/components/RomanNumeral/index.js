import React from "react";
import PropTypes from "prop-types";

export const RomanNumeral = ({ decimalNumber }) => {
  const convertToRomanNumeral = decimalNum => {
    // check if value is bigger than 3999 or small than 1
    if (decimalNum <= 0 || decimalNum > 3999) {
      return "";
    }

    return decimalNum
      .toString() // convert to string
      .padStart(4, 0) // padding with zeros
      .split("") // split string to array
      .map(v => parseInt(v)) // format strings to number
      .map(getRomanNumeral) // get the roman numerals for each power
      .join("");
  };

  return (
    <>
      {typeof decimalNumber !== "undefined" ? (
        <p data-testid={"roman_numeral"}>
          {convertToRomanNumeral(decimalNumber)}
        </p>
      ) : null}
    </>
  );
};

RomanNumeral.propTypes = {
  decimalNumber: PropTypes.number
};

const getRomanNumeral = (value, pos) => {
  const romanNumerals = [
    ["M"],
    ["C", "D", "M"],
    ["X", "L", "C"],
    ["I", "V", "X"]
  ];

  switch (value) {
    case 9:
      return romanNumeral(romanNumerals[pos][0], romanNumerals[pos][2]);
    case 8:
      return romanNumeral(romanNumerals[pos][1], romanNumerals[pos][0], 3);
    case 7:
      return romanNumeral(romanNumerals[pos][1], romanNumerals[pos][0], 2);
    case 6:
      return romanNumeral(romanNumerals[pos][1], romanNumerals[pos][0]);
    case 5:
      return romanNumeral(romanNumerals[pos][1]);
    case 4:
      return romanNumeral(romanNumerals[pos][0], romanNumerals[pos][1]);
    case 3:
      return romanNumeral(romanNumerals[pos][0], romanNumerals[pos][0], 2);
    case 2:
      return romanNumeral(romanNumerals[pos][0], romanNumerals[pos][0]);
    case 1:
      return romanNumeral(romanNumerals[pos][0]);
    default:
      return "";
  }
};

/*
    constructs a part of a roman numeral
    @ numeral1: number
    @ numeral2: number              
    @ repeatsOfNumeral2: number     how many times should the numeral2 be repeated
*/
const romanNumeral = (numeral1, numeral2, repeatsOfNumeral2 = 1) => {
  let res = numeral1;
  if (numeral2) {
    for (let i = 0; i < repeatsOfNumeral2; i++) {
      res += numeral2;
    }
  }

  return res;
};
