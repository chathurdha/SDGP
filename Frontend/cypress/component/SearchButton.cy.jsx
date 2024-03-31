import React from 'react'
import SearchButton from '../../src/components/Common/PastE-Sections/SearchButton'

describe('<SearchButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchButton />)
  })
})