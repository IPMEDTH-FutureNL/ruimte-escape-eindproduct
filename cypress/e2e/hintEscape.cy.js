describe('HintEscape', () => {
    it('gebruiker wilt een hint kopen', () => {
        //gebruiker komt op de pagina waar de drag and drop puzzel zich bevind
        cy.visit('http://localhost:3000/puzzelTwee');

        // //gebruiker klikt op de hints button
        cy.get('.hint-button').click();

        // //gebruiker klikt op de eerste hint button
        cy.get('.hint-button-tab').click();

        // //gebruiker koopt een hint met de koop hint button
        cy.get('.hint-button-buyhint').click();
    })
})


