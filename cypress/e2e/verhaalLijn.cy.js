describe('Verhaal lijn', () => {
    it('De gebruiker klikt op de verder gaan button om verder te gaan in het verhaal', () => {
        //gebruiker komt op de pagina waar de drag and drop puzzel zich bevind
        cy.visit('http://localhost:3000/oplosmatrixSucces');

        //gebruiker klikt op verder button
        cy.get('.continue').click();
    })
})
