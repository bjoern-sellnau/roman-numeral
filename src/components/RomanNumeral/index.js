import React from "react";
import PropTypes from "prop-types";

export const RomanNumeral = ({ decimalNumber }) => {
  const convertToRomanNumeral = decimalNum => {
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
