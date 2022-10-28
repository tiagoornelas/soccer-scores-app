import React from "react";
import moment from "moment";
import DateSelector from "./DateSelector";
import { screen } from "@testing-library/react";
import { render } from "../../utils/helpers/testing";

describe("<DateSelector>", () => {
  function setup() {
    render(<DateSelector date={moment()} />);
  }

  it("should render the Header component with today as default date", () => {
    setup();

    const today = moment().format("DD/MM");
    expect(screen.getByText(today, { exact: false })).toBeInTheDocument();
  });
});
