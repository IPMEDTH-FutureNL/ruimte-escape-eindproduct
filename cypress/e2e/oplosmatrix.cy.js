describe('Oplosmatrix Fout', () => {
    it('gebruiker vult de verkeerde waarde in bij de oplosmatrix', () => {
        //gebruiker komt op de pagina waar de drag and drop puzzel zich bevind
        cy.visit('http://localhost:3000/puzzelTwee');

        //Gebruiker vult de verkeerde code in bij de matrix: verwachte uitkomst een pop up dat dit niet de juist code is.
        const codeInput = '6';
        const codeInputSecond = '7';
        const codeInputThird = '8';

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