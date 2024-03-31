import React from 'react'
import SeminarActionButtons from '../../src/components/ReceivedSeminarRequests/SeminarActionButtons'

describe('<SeminarActionButtons />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SeminarActionButtons />)
  })
})