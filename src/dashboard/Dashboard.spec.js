// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it("renders Display correctly", () => {
        const {getByTestId} = render(<Dashboard />);
        const displayDisplay = getByTestId('display');
        expect(displayDisplay);
    });

    it("renders Controls correctly", () => {
        const {getByTestId} = render(<Dashboard />);
        const displayControls = getByTestId('controls');
        expect(displayControls);
    });

    it("displays open/closed when clicked", () => {
        const {getByTestId, queryByText} = render(<Dashboard />);
        expect(queryByText(/Open/i)).toBeTruthy();
        fireEvent.click(getByTestId(/controlsButton2/i));
        expect(queryByText(/Closed/i)).toBeTruthy();
    });

  });