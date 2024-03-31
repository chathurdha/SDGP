import React from 'react'
import AboutUs from '../../src/pages/CommanPages/AboutUs.jsx'

describe('<AboutUs />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutUs />)
  })
})