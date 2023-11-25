import React from 'react';
import NotesCircle from './NotesCircle';

describe('<NotesCircle />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<NotesCircle state='played' />);
    });
});
