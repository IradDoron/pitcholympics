import React from 'react'
import GameLevelsLinks from './GameLevelsLinks'
import memoTheMeloMockData from '@/mockData/memoTheMelo'
describe('<GameLevelsLinks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameLevelsLinks levelsData={memoTheMeloMockData} lang='en' game='memo-the-melo' />)
  })
})