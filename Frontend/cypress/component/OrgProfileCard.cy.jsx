import React from 'react'
import OrgProfileCard from '../../src/components/School/OrganizationSearch/OrgProfileCard.jsx'

describe('<OrgProfileCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OrgProfileCard />)
  })
})