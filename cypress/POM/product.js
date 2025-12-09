
export default class ProductPage{
    productTitleLocator = '.title'
    dropdownLocator ='.select_container'
    filterLocator = '.product_sort_container'
    productImageLocator = '[data-test="inventory-item-sauce-labs-backpack-img"]'
    bagProductLocator = '[data-test="inventory-item-sauce-labs-backpack-img"]'
    addProductLocator = '#add-to-cart-sauce-labs-backpack'
    removeProductLocator = '#remove-sauce-labs-backpack'
    backLocator = '[data-test="back-to-products"]'
    filterPriceLocator= '[data-test="inventory-item-price"]'
    backpackDescriptionLocator = '.inventory_item_desc'
    tshirtTitleLocator = '.inventory_item_name '

    assertProductTitle(){
        cy.get(this.productTitleLocator).should('be.visible')

    }
    assertDropdown(){
        cy.get(this.dropdownLocator).should('be.visible')
    }
    clickFilter(){
        cy.get(this.filterLocator).select('lohi')
        cy.wait(100)

        cy.get(this.filterPriceLocator).then(($prices) =>{
            const uiPrices = []
            $prices.each((index, el) => {
                const price = Cypress.$(el).text().replace('$', '').trim()
                uiPrices.push(parseFloat(price))
            })
            cy.log('Low to High UI Prices:', JSON.stringify(uiPrices))

            const sortedAsc = [...uiPrices].sort((a, b) => a - b)
            expect(uiPrices, 'Products are sorted Low → High').to.deep.equal(sortedAsc)
        })

    }
    filterholi(){
        cy.get(this.filterLocator).select('hilo')
        cy.wait(100)

        cy.get(this.filterPriceLocator).then(($prices) =>{
            const uiPrices = []
            $prices.each((index, el) => {
                const price = Cypress.$(el).text().replace('$', '').trim()
                uiPrices.push(parseFloat(price))
            })
            cy.log('High to Low UI Prices:', JSON.stringify(uiPrices))

            const sortedDesc = [...uiPrices].sort((a, b) => b - a)
            expect(uiPrices, 'Products are sorted High → Low').to.deep.equal(sortedDesc)
        })
    }
    checkDescription(){
        cy.get(this.backpackDescriptionLocator).eq(0).should('be.visible')
        cy.get(this.backpackDescriptionLocator).eq(0).should('contain.text','Carry all the things with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    }
    checkTitle(){
        cy.get(this.tshirtTitleLocator).eq(5).should('be.visible')
        cy.get(this.tshirtTitleLocator).eq(5).should('have.text','T-Shirt')
    }
    assertProductImage(){
        cy.get(this.productImageLocator).should('be.visible')
    }
    clickBagProduct(){
        cy.get(this.bagProductLocator).click()
    }
    clickAddProduct(){
        cy.get(this.addProductLocator).click()
    }
    clickRemoveProduct(){
        cy.get(this.removeProductLocator).click()
    }
    clickBackToProduct(){
        cy.get(this.backLocator).click()    
    }

}