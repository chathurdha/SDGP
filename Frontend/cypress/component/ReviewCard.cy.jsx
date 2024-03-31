import React from 'react'
import ReviewCard from '../../src/components/ReviewCard.jsx'

describe('<ReviewCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReviewCard />)
  })
})