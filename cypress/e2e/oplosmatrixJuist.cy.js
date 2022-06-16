describe('Oplosmatrix Goed', () => {
    it('gebruiker vult de juiste waarde in bij de oplosmatrix', () => {
        //gebruiker komt op de pagina waar de drag and drop puzzel zich bevind
        cy.visit('http://localhost:3000/puzzelTwee');

        //Gebruiker vult de juiste code in bij de matrix: verwachte uitkomst de gebruiker gaat verder in het verhaal.
        const codeInput = '6';
        const codeInputSecond = '7';
        const codeInputThird = '4';

        cy.get('.first')
            .type(codeInput)
            .should('have.value', codeInput);
        
        cy.get('.second')
            .type(codeInputSecond)
            .should('have.value', codeInputSecond);
        
        cy.get('.third')
            .type(codeInputThird)
            .should('have.value', codeInputThird);
        
        cy.get('.oplosmatrix__lock-button').click();        
    })
})