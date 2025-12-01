


import Sidebar from "../POM/sidebar";

describe('For sidebar menu',()=>{
    let sidebar
        beforeEach(()=>{
            cy.login()
            sidebar = new Sidebar()
    
        })
    it('TC-SIDEBAR-001: To verify users can view and click the sidebar icon',()=>{
        sidebar.clickHamburgerMenu()
    })
    it('TC-SIDEBAR-002: To verify users can view all the pages',()=>{
        sidebar.assertSidebarItems()

    })
    it('TC-SIDEBAR-003: To verify users can close the sidebar',()=>{
        sidebar.clickCrossButton()
    })
    it('TC-SIDEBAR-004: To verify users',()=>{

    })

})