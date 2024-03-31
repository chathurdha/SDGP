import React from 'react'
import OrganizationSelect from '../../src/components/Common/PastE-Sections/OrganizationSelect'

describe('<OrganizationSelect />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OrganizationSelect />)
  })
})