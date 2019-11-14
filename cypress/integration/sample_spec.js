describe('My First Test', function(){

    // it('Does not do much!', function(){
    //     expect(true).to.equal(true)
    // })

    // it('clicking "type" navigates to a new url', function(){
    //     cy.visit('https://example.cypress.io')

    //     //cy.pause() //cy.debug()

    //     cy.contains('type').click()

    //     cy.url()
    //         .should('include', '/commands/actions')

    //     cy.get('.action-email')
    //         .type('fake@email.com')
    //         .should('have.value', 'fake@email.com')
    // })

    it('verificando se barreira é exibida', function(){
        cy.visit('https://gq.globo.com/Estilo/Moda-masculina/noticia/2018/08/listas-gq-os-acessorios-para-nao-errar.html')

        cy.get('#content > div.paywall-cpt.paywall-cpt-gq > div > div.paywall-cpt-wrap__top')
            .should('be.visible')

    })

    it('acessando um conteudo exclusivo com barreira', function(){

        //cy.visit('https://beta.revistacasaejardim.qa01.globoi.com/Casa-e-Jardim/Paisagismo/noticia/2019/06/paisagismo-8-coberturas-recheadas-com-plantas.html?ambiente-desejado=int')
        cy.visit('https://gq.globo.com/Estilo/Moda-masculina/noticia/2018/08/listas-gq-os-acessorios-para-nao-errar.html')
        
        cy.get('#content > div.paywall-cpt.paywall-cpt-gq > div > div.paywall-cpt-wrap__top')
            .find('a')
            .should('have.attr', 'href', 'https://login.globo.com/cadastro/6697?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fgq.globo.com%2FEstilo%2FModa-masculina%2Fnoticia%2F2018%2F08%2Flistas-gq-os-acessorios-para-nao-errar.html') 
    })
})