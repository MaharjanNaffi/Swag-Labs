export default class Cart {

    // Locators
    cartIcon = '.shopping_cart_link'
    cartBadge = '.shopping_cart_badge'
    cartItems = '[data-test="inventory-item"]'
    cartItemName = '[data-test="inventory-item-name"]'
    cartItemPrice = '[data-test="inventory-item-price"]'

    // Product Add Button Locators
    firstProduct = '#add-to-cart-sauce-labs-backpack'
    secondProduct = '#add-to-cart-sauce-labs-bike-light'

    // Product Remove Button Locators
    firstProductRemove = '#remove-sauce-labs-backpack'
    secondProductRemove = '#remove-sauce-labs-bike-light'

    //Product details
    firstProductDetail = 'Sauce Labs Backpack'

    backToProductsLocator = '#back-to-products'

    continueShoppingLocator = '#continue-shopping'
    checkoutButtonLocator = '#checkout'

    // Store dynamically added products
    addedProducts = []

    // ============= BASIC CART ACTIONS ============= //

    clickCartIcon() {
        cy.get(this.cartIcon).click()
    }

    addFirstProduct() {
        this.addProduct(this.firstProduct)
    }

    addSecondProduct() {
        this.addProduct(this.secondProduct)
    }

    addProduct(productLocator) {
        cy.get(productLocator).parents('.inventory_item').within(() => {
            cy.get('.inventory_item_name')
              .invoke('text')
              .then((name) => {
                  this.addedProducts.push(name.trim())
              })
        })
        cy.get(productLocator).click()
    }

    // ============= VERIFICATIONS ============= //

    verifyCartBadgeVisible() {
        cy.get(this.cartBadge).should('be.visible')
    }

    verifyCartBadgeCount(count) {
        cy.get(this.cartBadge).should('have.text', String(count))
    }

    verifyCartItemCount(count) {
        cy.get(this.cartItems).should('have.length', count)
    }

    // Dynamically verify that all added products exist in the cart
    verifyCartContainsAddedProducts() {
        this.addedProducts.forEach((productName) => {
            cy.get(this.cartItemName).should('contain.text', productName)
        })
    }

    checkProductOrderInCart(){
        cy.get(this.firstProduct).click()
        cy.get(this.secondProduct).click()
        this.clickCartIcon()
        cy.get(this.cartItemName).then((items) => {
            expect(items[0]).to.contain.text('Sauce Labs Backpack')
            expect(items[1]).to.contain.text('Sauce Labs Bike Light')
        })
    }
    removeProductFromCart(productLocator) {
        
        cy.get(this.firstProductRemove).click()
        
    }
    clickcontinueShopping() {
        cy.get(this.continueShoppingLocator).click()
    }
    clickProductDetail() {
        cy.contains(this.firstProductDetail).click()
    }
    assertCheckoutButtonVisible() {
        cy.get(this.checkoutButtonLocator).should('be.visible')
    }
    clickBackToProducts() {
        cy.get(this.backToProductsLocator).click()
    }
}
