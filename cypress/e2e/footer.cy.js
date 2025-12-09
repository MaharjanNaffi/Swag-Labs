import Footer from "../POM/footer"

describe('Footer Section Tests', () => {

    let footer
    
        beforeEach(() => {
            cy.login()   // assuming you have a custom login command
            footer = new Footer()
        })
    it("TC-FOOTER-001: To verify visibility of social media(twitter, facebook, linkdin) icon",() => {
        footer.assertIconVisibility()
    })
    it("TC-FOOTER-002: To verify copyright text in footer section",() => {
        footer.assertCopyrightText()
    })
    it("TC-FOOTER-003: To verify twitter icon redirection",() => {
        footer.clickTwitterIcon()
        cy.url().should('include','x.com/saucelabs')
    })
    it("TC-FOOTER-004: To verify facebook icon redirection",() => {
        footer.clickFacebookIcon()
        cy.url().should('include','facebook.com/saucelabs')
    })  
    it("TC-FOOTER-005: To verify linkdin icon redirection",() => {
        footer.clickLinkedinIcon()
        cy.url().should('include','linkedin.com/company/sauce-labs/')
    })
    it.only("TC-FOOTER-006: To verify copyright link redirection",() => {
        footer.clickCopyrightLink()
        cy.url().should('include','saucelabs.com')
    })

})