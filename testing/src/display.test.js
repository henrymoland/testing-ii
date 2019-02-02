import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

describe('Display', () => {
    it('should display strikes and balls set to 0 when the hit button is clicked', () => {
        const { getByText, getByTestId } = render(<Display />);

        const strikes = getByText('Strikes:');
        const balls = getByText('Balls:');
        const hitButton = getByTestId('hit-button')
        fireEvent.click(hitButton);
        expect(strikes).toHaveTextContent('0')
        expect(balls).toHaveTextContent('0')
    })
});
