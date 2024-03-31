import React from 'react'
import VolDetForm from '../../src/components/SignInSignUpComponents/VolDetForm.jsx'

describe('<VolDetForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VolDetForm />)
  })
})