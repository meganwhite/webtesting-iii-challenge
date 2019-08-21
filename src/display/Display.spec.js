// Test away!
import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from './Display';

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