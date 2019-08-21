// Test away!
//yarn
//yarn add -D @testing-library/jest-dom
//yarn add -D @testing-library/react

import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Display from './Display';

describe("<Display />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />); // generates a DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('displays "open" by default', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText(/Open/i)).toBeTruthy();
    })

    it('displays "unlocked" by default', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText(/Unlocked/i)).toBeTruthy();
    })


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

describe("Test to see if classes are set properly", () => {
    it('should have class "green-led" when props are false', () => {
        const {getByText} = render(<Display closed = {false} locked={false}/>);
        const unlocked = getByText(/unlocked/i);
        const open = getByText(/open/i);
        expect(unlocked.classList.contains("green-led")).toBe(true);
        expect(open).toHaveClass("green-led");
    })

    it('should have class "red-led" when props are false', () => {
        const {getByText} = render(<Display closed = {true} locked={true}/>);
        const locked = getByText(/locked/i);
        const closed = getByText(/closed/i);
        expect(locked.classList.contains("red-led")).toBe(true);
        expect(closed).toHaveClass("red-led");
    })

})