import React from 'react'
import Label from './Label'

describe('<Label />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Label />)
  })
})