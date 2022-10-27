import React from "react";
import MatchesContainer from "./MatchesContainer";
import { screen } from "@testing-library/react";
import { render } from "../../utils/helpers/testing";

describe("<MatchesContainer>", () => {
  function setup() {
    render(<MatchesContainer />);
  }

  it("should render the MatchesContainer component with project tabs", () => {
    setup();
    expect(screen.getByText("Ao vivo")).toBeInTheDocument();
    expect(screen.getByText("Resultados")).toBeInTheDocument();
  });
});
