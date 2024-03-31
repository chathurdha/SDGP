import React from 'react'
import PastEvent from './PastEvent'

describe('<PastEvent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PastEvent />)
  })
})