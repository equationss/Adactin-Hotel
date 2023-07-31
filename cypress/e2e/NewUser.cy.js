describe('New SignUP', () => {
    it('User Registration', () => {
  
      //View Adjustment
      cy.viewport(1280,768)
  
      //Visit Website
      cy.URL()
  
      //Assertion
      cy.get('.logo').should('exist')

      //User Sign up
      cy.get('.login_register > a').click()

      //Assertion of Registration Page
      cy.get('#captcha').should('exist')

      //To Go Back to Home Page
      //cy.get('[align="right"] > a').click()

      //Registration Form
      cy.get('#username').type('JJunaid')
      cy.get('#password').type('Rj@6606168')
      cy.get('#re_password').type('Rj@6606168')
      cy.get('#full_name').type('Raja Junaid Ullah Khan')
      cy.get('#email_add').type('junaidraja@gmail.com')

      //Wait for Manaul Captcha
      cy.wait(10000)
      
      //For Terms & Conditions
      cy.get('#tnc_box').click()
      
      //To Register
      //cy.get('#Submit').click()

      //To Reset Form
      cy.get('#Reset').click()
    })
  })