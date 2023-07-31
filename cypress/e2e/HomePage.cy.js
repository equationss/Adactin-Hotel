describe('Home Page', () => {
  it('Load Properly', () => {

    //View Adjustment
    cy.viewport(1280,768)

    //Visit Website
    cy.URL()

    //Go to 2nd Build
    cy.get('a > strong').click()

    //Assertion
    cy.get('.logo').should('exist')
  })
})