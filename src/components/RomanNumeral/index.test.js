import React from "react";
import { render } from "@testing-library/react";

import { RomanNumeral } from "./index";

describe("Basic tests", () => {
  it("does not exist without decimalNumber Prop", () => {
    const { queryByTestId } = render(<RomanNumeral />);
    expect(queryByTestId(/roman_numeral/i)).toBeNull();
  });

  it("renders without crashing", () => {
    const { queryByTestId } = render(<RomanNumeral decimalNumber={10} />);
    expect(queryByTestId(/roman_numeral/i)).toBeTruthy();
  });
  it("using 'notANumber' fails with 'Failed prop type'", () => {
    expect(() => render(<RomanNumeral decimalNumber={"notANumber"} />)).toThrow(
      /Failed prop type/
    );
  });

  it("using 'true' fails with 'Failed prop type'", () => {
    expect(() => render(<RomanNumeral decimalNumber={true} />)).toThrow(
      /Failed prop type/
    );
  });
});

describe("Base Roman Signs", () => {
  it("1 should render a value of 'I'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={1} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("I");
  });

  it("5 should render a value of 'V'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={5} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("V");
  });

  it("10 should render a value of 'X'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={10} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("X");
  });
  it("50 should render a value of 'L'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={50} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("L");
  });
  it("100 should render a value of 'C'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={100} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("C");
  });
  it("500 should render a value of 'CD", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={500} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("D");
  });
  it("1000 should render a value of 'M'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={1000} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("M");
  });
});

describe("Special Cases", () => {
  it("4 should render a value of 'IV'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={4} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("IV");
  });

  it("9 should render a value of 'IX'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={9} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("IX");
  });

  it("36 should render a value of 'XXXVI'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={36} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("XXXVI");
  });

  it("42 should render a value of 'XLII'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={42} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("XLII");
  });

  it("47 should render a value of 'XLVII'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={47} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("XLVII");
  });
  it("3999 should render a value of 'MMMCMXCIX'", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={3999} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("MMMCMXCIX");
  });

  it("0 should render no number", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={0} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("");
  });
  it("4999 should render no number", () => {
    const { getByTestId } = render(<RomanNumeral decimalNumber={4999} />);

    expect(getByTestId(/roman_numeral/i).textContent).toBe("");
  });
});
