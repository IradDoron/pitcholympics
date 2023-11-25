import React from 'react'
import StageLevelsContainer from './StageLevelsContainer'

describe('<StageLevelsContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StageLevelsContainer >
      <h1>hey</h1>
    </StageLevelsContainer>)
  })
})