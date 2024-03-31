import React from 'react'
import ProfNav from './SchlNavBar'

describe('<ProfNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProfNav />)
  })
})