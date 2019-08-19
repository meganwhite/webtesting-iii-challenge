// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Controls from './Controls';

describe("<Controls />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Controls />); // generates a DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

  });