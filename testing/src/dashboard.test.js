import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './components/Dashboard';

describe('Dashboard', () => {
    it('should display a button for hit, strike, ball and foul', () => {
        const { getByTestId } = render(<Dashboard />);

        const strikeButton = getByTestId('strike-button');
        const ballButton = getByTestId('ball-button');
        const foulButton = getByTestId('foul-button');
        const hitButton = getByTestId('hit-button');

        expect(strikeButton).toHaveTextContent('Strike');
        expect(ballButton).toHaveTextContent('Ball');
        expect(foulButton).toHaveTextContent('Foul');
        expect(hitButton).toHaveTextContent('Hit');
    });

    it('should fire an event when a button is clicked', () => {
        const { getByTestId } = render(<Dashboard />)

        const strikeButton = getByTestId('strike-button');
        const ballButton = getByTestId('ball-button');
        const foulButton = getByTestId('foul-button');
        const hitButton = getByTestId('hit-button');

        fireEvent.click(strikeButton);
        fireEvent.click(ballButton);
        fireEvent.click(foulButton);
        fireEvent.click(hitButton);
    })
});