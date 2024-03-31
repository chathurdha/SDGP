import React from 'react'
import Ratings from '../../src/components/Common/PastE-Sections/Ratings'

describe('<Ratings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Ratings />)
  })
})