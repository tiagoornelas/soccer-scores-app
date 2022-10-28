import React from "react";
import Header from "./Header";
import { screen } from "@testing-library/react";
import { render } from "../../utils/helpers/testing";

describe("<Header>", () => {
  function setup() {
    render(<Header />);
  }

  it("should render the Header component with project title", () => {
    setup();
    expect(screen.getByText("soccer", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("scores", { exact: false })).toBeInTheDocument();
  });
});
