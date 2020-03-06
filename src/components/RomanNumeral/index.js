import React from "react";
import PropTypes from "prop-types";

export const RomanNumeral = ({ decimalNumber }) => {
  const convertToRomanNumeral = decimalNum => {
    const roman = decimalNum
      .toString()
      .padStart(4, 0)
      .split("");
    console.log(roman);

    if (decimalNum === 10) {
      return "X";
    }
    return "I";
  };

  return (
    <>
      {decimalNumber ? (
        <p data-testid={"roman_numeral"}>
          {decimalNumber && convertToRomanNumeral(decimalNumber)}
        </p>
      ) : null}
    </>
  );
};

RomanNumeral.propTypes = {
  decimalNumber: PropTypes.number
};

/*
THO;
HUN;
TEN;
ONE;
*/
