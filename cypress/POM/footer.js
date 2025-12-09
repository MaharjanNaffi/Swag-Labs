
export default class Footer{
    // Icon Locators
    twitterIcon = '[data-test="social-twitter"]'
    facebookIcon = '[data-test="social-facebook"]'
    linkedinIcon = '[data-test="social-linkedin"]'

    copyrightLocator = '[data-test="footer-copy"]'

    assertIconVisibility(){
        cy.get(this.twitterIcon).should('be.visible')
        cy.get(this.facebookIcon).should('be.visible')
        cy.get(this.linkedinIcon).should('be.visible')
    }   

    assertCopyrightText(){
        cy.get(this.copyrightLocator).should('have.text','© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    }   

    clickTwitterIcon(){
        cy.get(this.twitterIcon).invoke('removeAttr', 'target').click()
    }   
    clickFacebookIcon(){
        cy.get(this.facebookIcon).invoke('removeAttr', 'target').click()
    }       
    clickLinkedinIcon(){
        cy.get(this.linkedinIcon).invoke('removeAttr', 'target').click()
    }
    clickCopyrightLink(){
        cy.get(this.copyrightLocator).click()
    }   
}