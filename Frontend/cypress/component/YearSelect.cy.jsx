import React from 'react'
import YearSelect from '../../src/components/Common/PastE-Sections/YearSelect'

describe('<YearSelect />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<YearSelect />)
  })
})