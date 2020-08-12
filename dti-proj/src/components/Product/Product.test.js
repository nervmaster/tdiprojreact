import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import TopMenu from '.';
import { BrowserRouter as Router } from "react-router-dom";

/**
 * This unit test is not implemented because it needs some more study to do proper unit testing.
 * such as:
 *  - Mock the fetch requests (GET, POST, DELETE)
 *  - Mock the variable given by URL
 */


describe('<Product />', () => {
    it('Should render successfully', () => {
    });

    it('Should render delete button if editing', () => {
    });

    it('Should show prompt for user confirmation if delete', () => {
    });

    it('Should call DELETE when DELETE button is clicked', () => {
    });

    it('Should show confirmation dialog when DELETE is successful', () => {
    });

    it('Should show confirmation dialog when POST is successful', () => {
    });

    it('Should redirect to edit product when POST is successful', () => {
    });

    it('Should redirect to root product when DELETE is successful', () => {
    });
});