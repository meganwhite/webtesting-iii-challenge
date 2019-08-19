// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";
import Display from '../display/Display';
import Controls from '../controls/Controls';

describe("<Dashboard />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    // it("renders Display correctly"), () => {
        
    // }

  });
