import React from 'react'
import ReviewSemCard from './ReviewSemCard'

describe('<ReviewSemCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReviewSemCard />)
  })
})