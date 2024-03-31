import React from 'react'
import ProfNav from '../../src/components/navbar/SchlNavBar.jsx'

describe('<ProfNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProfNav />)
  })
})