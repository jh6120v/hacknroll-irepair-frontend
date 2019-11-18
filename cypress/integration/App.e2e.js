describe('App E2E', () => {
    it('should have a header', () => {
        cy.visit('http://localhost:8009');
        cy.get('.sc-gPEVay')
            .should('have.text', '愛呼呼補給站')
            .get('.gMtljn')
            .click()
            .get('.jHvmWJ')
            .should('have.text', 'iRepair');
    });
});
