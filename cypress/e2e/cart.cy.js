import Cart from "../POM/cart"

describe("Cart Tests - Dynamic Product Capture", () => {

    let cart

    beforeEach(() => {
        cy.login()   // assuming you have a custom login command
        cart = new Cart()
    })


    it("TC-CART-001:To verify users can click on cart icon .", () => {
        cart.clickCartIcon()
    })
    it("TC-CART-002: Verify cart badge updates after adding products", () => {
        cart.addFirstProduct()
        cart.verifyCartBadgeVisible()
        cart.verifyCartBadgeCount(1)
    })

    it("TC-CART-003: Add two products & verify cart count", () => {
        cart.addFirstProduct()
        cart.addSecondProduct()

        cart.verifyCartBadgeCount(2)
        cart.clickCartIcon()

        cart.verifyCartItemCount(2)
    })

    it("TC-CART-004: Verify dynamically added products inside cart", () => {
        cart.addFirstProduct()
        cart.addSecondProduct()

        cart.clickCartIcon()
        cart.verifyCartContainsAddedProducts()
    })

    it("TC-CART-005: To verify users can remove product from the cart", () => {
        cart.addFirstProduct()
        cart.clickCartIcon()
        cart.removeProductFromCart()   
    })
    it("TC-CART-006: Verify continue shopping button functionality", () => {
        cart.addFirstProduct()
        cart.clickCartIcon()
        cart.clickcontinueShopping()
        cy.url().should('include', '/inventory.html')
    })
    it("TC-CART-007: To verify users can view the product detail in cart", () => {
        cart.addFirstProduct()
        cart.addSecondProduct()
        cart.clickCartIcon()
        cart.clickProductDetail()
    })
    it("TC-CART-008: To verify users can view Cart page after clicking back to product", () => {
        cart.addFirstProduct()
        cart.clickCartIcon()
        cart.clickProductDetail()
        cart.clickBackToProducts()
        cy.url().should('include', '/cart.html')
    })
    it("TC-CART-009: To verify users can view chekout button", () => {
        cart.addFirstProduct()
        cart.clickCartIcon()
        cart.assertCheckoutButtonVisible()
    })
})
