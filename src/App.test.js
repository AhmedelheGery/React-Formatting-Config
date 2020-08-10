import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("has an input", () => {
  expect(wrapped.find('input').length).toEqual(1);
});

