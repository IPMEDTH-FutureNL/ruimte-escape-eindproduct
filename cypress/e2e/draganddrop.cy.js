describe('draganddrop puzzel', () => {
  it('gebruiker kan de drag and drop puzzel spelen en krijgt de juiste feedback', () => {
      //gebruiker komt op de pagina waar de drag and drop puzzel zich bevind
      cy.visit('http://localhost:3000/puzzelEen');

      //gebruiker sleept de planeet naar een van de groene bolletjes
      const dataTransfer = new DataTransfer;

       //Mercurius wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
       cy.get('#drag8').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div1').trigger('drop', {
        dataTransfer
      })

       //Venus wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
      cy.get('#drag1').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div2').trigger('drop', {
        dataTransfer
      })

      //Aarde wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
      cy.get('#drag2').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div3').trigger('drop', {
        dataTransfer
      })

       //Mars wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
      cy.get('#drag3').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div4').trigger('drop', {
        dataTransfer
      })

       //Jupiter wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
       cy.get('#drag4').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div5').trigger('drop', {
        dataTransfer
      })      

       //Saturnus wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
      cy.get('#drag5').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div6').trigger('drop', {
        dataTransfer
      })
  
       //Uranus wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
      cy.get('#drag6').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div7').trigger('drop', {
        dataTransfer
      })  

       //Neptunes wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
       cy.get('#drag7').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div8').trigger('drop', {
        dataTransfer
      })
      
      
      //gebruiker zet alle planeten in de juiste volgorde 

      //Mercurius wordt goed gesleept, dus nu moet mars op de juiste plek staan in het zonnestelsel
      cy.get('#drag1').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div1').trigger('drop', {
        dataTransfer
      })

       //Venus wordt goed gesleept, dus nu moet mars op de juiste plek staan in het zonnestelsel
      cy.get('#drag2').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div2').trigger('drop', {
        dataTransfer
      })

      //Aarde wordt goed gesleept, dus nu moet aarde op de juiste plek staan in het zonnestelsel
      cy.get('#drag3').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div3').trigger('drop', {
        dataTransfer
      })

       //Mars wordt goed gesleept, dus nu moet mars op de juiste plek staan in het zonnestelsel
      cy.get('#drag4').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div4').trigger('drop', {
        dataTransfer
      })

       //Jupiter wordt goed gesleept, dus nu moet Jupiter op de juiste plek staan in het zonnestelsel
       cy.get('#drag5').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div5').trigger('drop', {
        dataTransfer
      })      

       //Saturnus wordt goed gesleept, dus nu moet Saturnus op de juiste plek staan in het zonnestelsel
      cy.get('#drag6').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div6').trigger('drop', {
        dataTransfer
      })
  
       //Uranus wordt goed gesleept, dus nu moet Uranus op de juiste plek staan in het zonnestelsel
      cy.get('#drag7').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div7').trigger('drop', {
        dataTransfer
      })  

       //Neptunes wordt niet goed gesleept in het zonnestelsel er moet nu een rood rondje ontstaan.
       cy.get('#drag8').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#div8').trigger('drop', {
        dataTransfer
      })  

      //Planeten in de goede volgorde navigeert naar succes pagina
  })
}) 