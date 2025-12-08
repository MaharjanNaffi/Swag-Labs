
export default class Checkout{

    // Locators
    checkoutButtonLocator = '#checkout'
    // Product Add Button Locators
    firstProduct = '#add-to-cart-sauce-labs-backpack'
    secondProduct = '#add-to-cart-sauce-labs-bike-light'
    cartIcon = '.shopping_cart_link'



    

    // Checkout Your Information Locators
    firstNameLocator = '#first-name'
    lastNameLocator = '#last-name'
    postalCodeLocator = '#postal-code'
    continueButtonLocator = '#continue'
    cancelButtonLocator = '#cancel'  

    // Error Message Locator
    forPostalCodeErrorLocator = 'Error: Postal Code is required'
    forFirstNameErrorLocator = 'Error: First Name is required'
    forLastNameErrorLocator = 'Error: Last Name is required'

    // Overview Page Locators
    overviewPageLocator = 'Checkout: Overview'
    cancelButtonLocator = '#cancel'
    finishButtonLocator = '#finish'
    toCheckout(){
        cy.get(this.firstProduct).click()
        cy.get(this.secondProduct).click()
        cy.get(this.cartIcon).click()
        cy.get(this.checkoutButtonLocator).click()
    }

    // ============= BASIC CHECKOUT ACTIONS ============= //

    clickCheckoutButton() {
        this.toCheckout()
    }
    proceedTocheckout(){
        this.toCheckout()
        cy.get(this.firstNameLocator).type('John')
        cy.get(this.lastNameLocator).type('Doe')
        cy.get(this.postalCodeLocator).type('12345')
        cy.get(this.continueButtonLocator).click()
    }
    proceedTocheckoutWithoutFirstName(){
        this.toCheckout()
        cy.get(this.lastNameLocator).type('Doe')
        cy.get(this.postalCodeLocator).type('12345')
        cy.get(this.continueButtonLocator).click()
        cy.contains(this.forFirstNameErrorLocator).should('be.visible')
    }
    proceedTocheckoutWithoutLastName(){
        this.toCheckout()
        cy.get(this.firstNameLocator).type('John')
        cy.get(this.postalCodeLocator).type('12345')
        cy.get(this.continueButtonLocator).click()
        cy.contains(this.forLastNameErrorLocator).should('be.visible')
    }
    proceedTocheckoutWithoutPostalCode(){
        this.toCheckout()
        cy.get(this.firstNameLocator).type('John')
        cy.get(this.lastNameLocator).type('Doe')
        cy.get(this.continueButtonLocator).click()
        cy.contains(this.forPostalCodeErrorLocator).should('be.visible')
    }
    assertOverviewPageVisible() {
        this.proceedTocheckout()
        cy.contains(this.overviewPageLocator).should('be.visible')
    }
    clickCancelButton() {
        this.proceedTocheckout()
        cy.get(this.cancelButtonLocator).click()

    }
    clickFinishButton() {
        this.proceedTocheckout()
        cy.get(this.finishButtonLocator).click()
    }

}