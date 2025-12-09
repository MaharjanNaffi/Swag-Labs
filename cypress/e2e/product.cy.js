

import ProductPage from "../POM/product"

describe('Product page',()=>{
    let prod
    beforeEach(()=>{
        cy.login()
        prod = new ProductPage()

    })
    
    it('TC-PRODUCT-001: to verify users can view heading on product title ',()=>{
        prod.assertProductTitle()
        
    })
    it('TC-PRODUCT-002: To verify users can view filter dropdown',()=>{
        prod.assertDropdown()
    })
    it('TC-PRODUCT-003: To verify users can change filters', ()=>{
        prod.clickFilter()
    })
    it('TC-PRODUCT-004: To verify users can view the product image',()=>{
        prod.assertProductImage()
    }) 
    it('TC-PRODUCT-005: To verify user can add product to cart', ()=>{
        prod.clickAddProduct()
    })
    it('TC-PRODUCT-006: To verify users can remove product from cart.',()=>{
        prod.clickAddProduct()
        prod.clickRemoveProduct()
    })
    it('TC-PRODUCt-007: to verify users can use go back page',()=>{
        prod.clickBagProduct()
        prod.clickBackToProduct()
    })
    it('TC-PRODUCT-008: To verify users can filter product from price',()=>{
        prod.filterholi()
    })
    it.only("TC-PRODUCT-009: To verify product description of Sauce Labs Backpack",()=>{
        prod.checkDescription()

    })
    it.only("TC-PRODUCT-010: To verify product title of T-shirt",()=>{
        prod.checkTitle()
    })
})