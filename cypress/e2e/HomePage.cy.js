describe('Home Page', () => {
  it('Load Properly', () => {
    cy.viewport(1280,768)
    cy.visit('https://adactinhotelapp.com/')

    cy.get('.logo').should('exist')
  })
})