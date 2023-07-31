describe('Home Page', () => {
  it('Load Properly', () => {

    //View Adjustment
    cy.viewport(1280,768)

    //Visit Website
    cy.URL()

    //Assertion
    cy.get('.logo').should('exist')
  })
})