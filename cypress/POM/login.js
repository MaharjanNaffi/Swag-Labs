export default class LoginPage {
  userNameLocator = "#user-name"
  passwordLocator = "#password"
  loginButtonLocator = "#login-button"

  loginn(username, password) {
    cy.get(this.userNameLocator).clear().type(username).should('have.value', username)
    cy.get(this.passwordLocator).clear().type(password).should('have.value', password)
    cy.get(this.loginButtonLocator).click()
  }
}
