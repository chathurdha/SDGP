import React from 'react'
import Organizations from '../../src/components/Common/Home-Sections/Organizations'

describe('<Organizations />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Organizations />)
  })
})