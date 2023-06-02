/// <reference types="Cypress"/>
describe('this is my trial test suit',()=>{
    it('visit shein page and verify it',()=>{
        cy.visit('https://www.shein.co.uk/')
        cy.get('button').contains('Accept').click()
        cy.get('div[class="c-coupon-box"] i[class="iconfont icon-close she-close"]').click()
        cy.get('#header_logo_icon').should('be.visible')
        cy.log('checking auto trigger')
        cy.log('checking build success message in github pull request')
    })
    })
    