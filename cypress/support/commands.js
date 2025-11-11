import LoginPage from "../POM/login"

const loginPage = new LoginPage()

Cypress.Commands.add('login', () => {
  cy.visit(Cypress.config('baseUrl'))  // or Cypress.env('BASE_URL') if you want
  loginPage.loginn(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
})
