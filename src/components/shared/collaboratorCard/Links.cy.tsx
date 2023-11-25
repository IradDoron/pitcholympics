import React from 'react'
import Links from './Links'

describe('<Links />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Links portfolio='' linkedin='' github='' color='primary'/>)
  })
})