
import Checkout from "../POM/checkout.js"
describe("Checkout Tests",()=>{

    let checkout

    beforeEach(() => {
        cy.login()   // assuming you have a custom login command
        checkout = new Checkout()
    })
    it("TC-CHECKOUT-001: To verify users can view the checkout button ",()=>{
        checkout.clickCheckoutButton()
    })
    it("TC-CHECKOUT-002: To verify users can proceed to checkout page using valid credentials ",()=>{
        checkout.proceedTocheckout()
        cy.url().should('include', '/checkout-step-two.html')
    })
    it("TC-CHECKOUT-003: To verify users cannot proceed to checkout page without using firstName ",()=>{
        checkout.proceedTocheckoutWithoutFirstName()
    })
    it("TC-CHECKOUT-004: To verify users cannot proceed to checkout page without using lastName ",()=>{
        checkout.proceedTocheckoutWithoutLastName()
    })
    it("TC-CHECKOUT-005: To verify users cannot proceed to checkout page without using postalCode ",()=>{
        checkout.proceedTocheckoutWithoutPostalCode()
    })
    it("TC-CHECKOUT-006: To verify overview page ",()=>{
        checkout.assertOverviewPageVisible()
    })
    it.only("TC-CHECKOUT-007: To verify users can cancel the checkout process from overview page ",()=>{
        checkout.clickCancelButton()
        cy.url().should('include', '/checkout-step-one.html')
    })
    it.only("TC-CHECKOUT-008: To verify finish button from overview page ",()=>{
        checkout.clickFinishButton()
        cy.url().should('include', '/checkout-complete.html')
    
    })

})