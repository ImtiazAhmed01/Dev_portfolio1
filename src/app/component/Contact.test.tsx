
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';


describe('Contact', () => {
    it('renders the heading', () => {
        render(<Contact />);
        expect(screen.getByText(/Interested in/i)).toBeInTheDocument();
    });
});
