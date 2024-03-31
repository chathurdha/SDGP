import React from 'react'
import SchoolOverview from './SchoolOverview'

describe('<SchoolOverview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SchoolOverview />)
  })
})