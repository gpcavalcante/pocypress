describe('Exibição de Barreira nas Revistas', function(){

    it('exibiu barreira no O Globo', function() {
        cy.visit('https://globostg.globoi.com/mundo/subeditoria-automatica/teste-para-omelete-exclusivo-1118975?ambiente-desejado=int')
    
        cy.get('div.paywall-cpt.paywall-cpt-oglobo > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })
    
    it('exibiu barreira no Blog: Lauro Jardim', function() {
        cy.visit('https://blogs.qa01.globoi.com/lauro-jardim/post/com-todos-os-politicos.html?ambientedesejado=int')
        
        cy.get('#article > div.paywall-cpt.paywall-cpt-blogs > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

})