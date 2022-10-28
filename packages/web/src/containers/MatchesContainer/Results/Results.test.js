import React from "react";
import Results from "./Results";
import * as reactQuery from "@tanstack/react-query";
import { render } from "../../../utils/helpers/testing";

jest.spyOn(reactQuery, "useQuery");

describe("<Results>", () => {
  function setup() {
    render(<Results />);
  }

  it("should render the Results component fetching Results events", () => {
    setup();
    expect(reactQuery.useQuery).toHaveBeenCalled();
  });
});
