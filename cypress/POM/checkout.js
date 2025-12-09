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
    finishButtonLocator = '#finish'
    firstProductDetailLocator = 'Sauce Labs Backpack'
    secondProductDetailLocator = 'Sauce Labs Bike Light'
    backToOverviewLocator = '#back-to-products'

    // Checkout Complete Page Locator
    checkoutCompletePageLocator = 'Checkout: Complete!'
    backToHomeLocator = '#back-to-products'


    // Selectors for price validation (from your HTML)
    priceLocator = '[data-test="inventory-item-price"]'
    itemTotalLocator = '[data-test="subtotal-label"]'
    taxLocator = '[data-test="tax-label"]'
    totalLocator = '[data-test="total-label"]'

    // ------------------------ BASIC ACTIONS ------------------------ //

    toCheckout(){
        cy.get(this.firstProduct).click()
        cy.get(this.secondProduct).click()
        cy.get(this.cartIcon).click()
        cy.get(this.checkoutButtonLocator).click()
    }

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

    // ------------------------ PRICE VALIDATION ------------------------ //

    validatePriceCalculation() {

        let itemTotal = 0;

        // 1. Collect all product prices dynamically
        cy.get(this.priceLocator).each(($el) => {
            const price = parseFloat($el.text().replace('$', ''));
            itemTotal += price;
        }).then(() => {

            // 2. Validate Item Total
            cy.get(this.itemTotalLocator)
                .invoke('text')
                .then((txt) => {
                    const uiItemTotal = parseFloat(txt.replace(/[^0-9.]/g, ''));
                    expect(uiItemTotal).to.equal(itemTotal);
                });

            // 3. Get Tax dynamically
            cy.get(this.taxLocator)
                .invoke('text')
                .then((txt) => {
                    const tax = parseFloat(txt.replace(/[^0-9.]/g, ''));

                    // 4. Validate Final Total = Item Total + Tax
                    cy.get(this.totalLocator)
                        .invoke('text')
                        .then((txt) => {
                            const uiTotal = parseFloat(txt.replace(/[^0-9.]/g, ''));
                            const expectedTotal = itemTotal + tax;

                            expect(uiTotal).to.equal(expectedTotal);
                        });
                });
        });
    }
    viewProductInformation(){
        this.proceedTocheckout()
        cy.contains(this. firstProductDetailLocator).click()
    }
    clickBackToOverview(){
        this.viewProductInformation()
        cy.contains(this.backToOverviewLocator).click()
    }
    emptyOverviewPage(){
        cy.get(this.cartIcon).click()
        cy.get(this.checkoutButtonLocator).click()
    }
    assertCheckoutCompletePageVisible(){
        this.clickFinishButton()
        cy.contains(this.checkoutCompletePageLocator).should('be.visible')
    }
    clickBackHomeButton(){
        this.assertCheckoutCompletePageVisible()
        cy.get(this.backToHomeLocator).click()
    }

}
