// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecentralEclipse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecentralEclipse/i);
    expect(titleElement).toBeInTheDocument();
});
