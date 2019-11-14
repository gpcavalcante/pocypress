describe('My First Test', function() {
    // it('Nada demais!!!', function() {
    //     expect(true).to.equal(false)
    // })


    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io') //visitando uma página

        //cy.pause()
       //cy.debug()
       //cy.contains('type').debug() 

       cy.contains('type').click() //consultando e clicando em um elemento

        cy.url().should('include', 'commands/actions') //realizando uma asserção

        cy.get('.action-email')
            .type('fake@email.com') 
            .should('have.value', 'fake@email.com')

        //Após o click o Cypress detectou automaticamente um page transition event e interrompeu a execução de comandos 
        //até que a próxima página termine de carregar.

        //Se a página não tivesse terminado, o Cypress teria encerrado e apresentaria um erro.

        //Por padrão são 4 segundos para atingir o tempo limite para encontrar um elemento DOM mas quando o Cypress detecta
        //um page transition event ele automaticamente aumenta o tempo limite para 60 segundos para o PAGE LOAD.

        //Resumindo, o Cypress altera automaticamente os tempos limites paea corresponder ao comportamento da aplicação.
    })
})


