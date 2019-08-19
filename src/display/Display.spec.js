// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Display from './Display'

describe("<Display />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />); // generates a DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });


    it('displays "Closed" if closed prop is true', () => {
        const { getByText } = render(<Display closed={true} />);
        expect(getByText('Closed'));
    })

    it('displays "Open" if closed prop is false', () => {
        const { getByText } = render(<Display closed={false} />);
        expect(getByText('Open'));
    })

    it('displays "Locked" if the locked prop is true', () => {
        const {getByText} = render(<Display locked={true} />);
        expect(getByText('Locked'));
    })

    it('displays "Unlocked" if the locked prop is true', () => {
        const {getByText} = render(<Display locked={false} />);
        expect(getByText('Unlocked'));
    })

  });
