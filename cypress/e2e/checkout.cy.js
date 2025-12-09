
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
    it("TC-CHECKOUT-007: To verify users can cancel the checkout process from overview page ",()=>{
        checkout.clickCancelButton()
        cy.url().should('include', '/checkout-step-one.html')
    })
    it("TC-CHECKOUT-008: To verify finish button from overview page ",()=>{
        checkout.clickFinishButton()
        cy.url().should('include', '/checkout-complete.html')
    
    })
    it("TC-CHECKOUT-009: Validate overview page price calculation", () => {
        checkout.proceedTocheckout()
        checkout.validatePriceCalculation()
    })
    it("TC-CHECKOUT-010: To verify user can overview product information in overview page ",()=>{
        checkout.viewProductInformation()
        cy.url().should('include', '/inventory-item.html?id=4')
    })
    it("TC-CHECKOUT-011: Verify that the user can return to the Overview page after viewing product details. ",()=>{
        checkout.clickBackToOverview()
        cy.url().should('include', '/checkout-step-two.html')
    })
    it.only("TC-CHECKOUT-012: Verify users cannot proceed to checkout when cart is empty ",()=>{
        checkout.emptyOverviewPage()
        cy.url().should('not.include', '/checkout-step-one.html')   
    })
    it.only("TC-CHECKOUT-013: Verify users can complete the checkout process",()=>{
        checkout.assertCheckoutCompletePageVisible()
    })

    it.only("TC-CHECKOUT-014: To verify users can click back home button from checkout complete page ",()=>{
        checkout.clickBackHomeButton()
        cy.url().should('include', '/inventory.html')
    })


})