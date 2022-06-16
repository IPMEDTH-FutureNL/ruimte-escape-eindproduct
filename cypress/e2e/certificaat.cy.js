describe('Certificaat', () => {
    it('De gebruiker heeft de verhaallijn doorlopen en wil graag het certificaat uitprinten', () => {
        //gebruiker komt op de pagina waar de drag and drop puzzel zich bevind
        cy.visit('http://localhost:3000/certificaat');

        //gebruiker klikt op verder button
        cy.get('.button__print').click();
    })
})