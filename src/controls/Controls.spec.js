// Test away!
import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import Controls from "./Controls"

describe("<Controls />", () => {
    it('should disable lock button if gate is open', () => {
        //render copy of control component
        const wrapper = render(<Controls />);
        const lockButton = wrapper.getByText("Lock Gate")
        //look for property on control component
        expect(lockButton).toBeDisabled();
    })

    it('should disable open button if gate is closed and locked', () => {
        //when it renders Controls, it will render in this state
        const {getByText} = render(<Controls locked={true} closed={true}/>)
        //target the button
        const openButton = getByText(/open gate/i);
        expect(openButton.disabled).toBe(true);

    })

    it('should not call lock function if gate is open', () => {
        const mockLock = jest.fn();
        const {getByText} = render(<Controls />);
        const lockButton = getByText(/lock gate/i);
        //look to see if function fired
        fireEvent.click(lockButton);
        expect(mockLock).not.toBeCalled();
    })

})