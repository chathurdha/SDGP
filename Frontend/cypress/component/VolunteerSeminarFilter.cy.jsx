import React from 'react'
import VolunteerSeminarFilter from '../../src/pages/VolunteerPages/VolunteerSeminarFilter'

describe('<VolunteerSeminarFilter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VolunteerSeminarFilter />)
  })
})