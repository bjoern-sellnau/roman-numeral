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

/*
    gets the roman numerals
    @ numeral1: number
    @ numeral2: number              
    @ repeatsOfNumeral2: number     how many times should the numeral2 be repeated
*/
const getRomanNumeral = (value, pos) => {
  switch (value) {
    case 9:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 0),
        getRomanNumeralByPower(pos + 1, 2)
      );
    case 8:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 1),
        getRomanNumeralByPower(pos + 1, 0),
        3
      );
    case 7:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 1),
        getRomanNumeralByPower(pos + 1, 0),
        2
      );
    case 6:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 1),
        getRomanNumeralByPower(pos + 1, 0)
      );
    case 5:
      return romanNumeral(getRomanNumeralByPower(pos + 1, 1));
    case 4:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 0),
        getRomanNumeralByPower(pos + 1, 1)
      );
    case 3:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 0),
        getRomanNumeralByPower(pos + 1, 0),
        2
      );
    case 2:
      return romanNumeral(
        getRomanNumeralByPower(pos + 1, 0),
        getRomanNumeralByPower(pos + 1, 0)
      );
    case 1:
      return romanNumeral(getRomanNumeralByPower(pos + 1, 0));
    default:
      return "";
  }
};

/*
    returns a roman numeral of the given power and index
    @ power: number
    @ index: number              
*/
const getRomanNumeralByPower = (power, index) => {
  switch (power) {
    case 1:
      return index > 3 ? "" : "M";
    case 2:
      return ["C", "D", "M"][index] || "";
    case 3:
      return ["X", "L", "C"][index] || "";
    case 4:
      return ["I", "V", "X"][index] || "";
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
