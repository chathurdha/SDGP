import React from 'react'
import MatchingSeminars from '../../src/components/Common/PastE-Sections/MatchingSeminars'

describe('<MatchingSeminars />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MatchingSeminars />)
  })
})