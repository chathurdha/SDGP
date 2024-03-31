import React from 'react'
import AddReview from '../../src/components/AddReview.jsx'

describe('<AddReview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddReview />)
  })
})