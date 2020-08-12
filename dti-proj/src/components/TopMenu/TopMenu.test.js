import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import TopMenu from '.';
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe('<TopMenu />', () => {
    it('Should render successfully', () => {
        const {getByText} = render(<Router><TopMenu /></Router>,);
        
        expect(getByText("Product List")).toBeTruthy();
        expect(getByText("Create Product")).toBeTruthy();
    });
});