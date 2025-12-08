

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
    it('TC-SIDEBAR-004: To verify users can click on the ALL Items ',()=>{
        sidebar.clickALLItems()

    })
    it('TC-SIDEBAR-005: To verify users can click on the About  ',()=>{
        sidebar.clickAbout()
    })
    it('TC-SIDEBAR-006: To verify users can click on the Logout  ',()=>{
        sidebar.clickLogout()
    })
    it.only('TC-SIDEBAR-007: To verify users can click on the Reset App State  ',()=>{
        sidebar.clickReset()
    })

})