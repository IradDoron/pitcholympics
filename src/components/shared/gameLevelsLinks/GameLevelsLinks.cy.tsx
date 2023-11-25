import React from 'react'
import GameLevelsLinks from './GameLevelsLinks'

describe('<GameLevelsLinks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameLevelsLinks />)
  })
})