import React from 'react'
import PrevSeminar from '../../src/components/Organization/OrgComponent/OrgPrevSemFilter'

describe('<PrevSeminar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PrevSeminar />)
  })
})