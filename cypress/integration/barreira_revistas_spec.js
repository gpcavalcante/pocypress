describe('Exibição de Barreira nas Revistas', function(){

    it('exibiu barreira na Casa & Jardim', function() {
        cy.visit('https://beta.revistacasaejardim.qa01.globoi.com/Casa-e-Jardim/Paisagismo/noticia/2019/06/paisagismo-8-coberturas-recheadas-com-plantas.html?ambiente-desejado=int')
    
        cy.get('#content > div.paywall-cpt.paywall-cpt-casa-e-jardim > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Marie Claire', function() {
        cy.visit('https://beta.revistamarieclaire.qa01.globoi.com/Celebridades/noticia/2019/04/flavia-bittencourt-que-deixa-sephora-para-assumir-adidas-suscita-pergunta-como-ela-da-conta.html?ambiente-desejado=int')
        
        cy.get('#content > div.paywall-cpt.paywall-cpt-marie-claire > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Glamour', function() {
        cy.visit('https://beta.revistaglamour.qa01.globoi.com/PromoGlamour/noticia/2019/01/inspire-se-nesses-produtos-da-imaginarium-e-atualize-sua-lista-de-presentes.html?ambiente-desejado=int')
        
        cy.get('#content > div.paywall-cpt.paywall-cpt-glamour > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Casa Vogue', function() {
        cy.visit('https://beta.casavogue.qa01.globoi.com/LazerCultura/noticia/2019/04/guava-island-fabula-politizada-de-donald-glover.html?ambiente-desejado=int')

        cy.get('#content > div.paywall-cpt.paywall-cpt-casa-vogue > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Vogue', function() {
        cy.visit('https://beta.vogue.qa01.globoi.com/moda/gente/noticia/2019/03/henri-castelli-posta-foto-com-juliana-silveira-e-relembra-personagens-antigos.html?ambiente-desejado=int')

        cy.get('#content > div.paywall-cpt.paywall-cpt-vogue > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')

    })

    it('exibiu barreira na Globo Rural', function() {
        cy.visit('https://beta.revistagloborural.qa01.globoi.com/Cidades-Verdes/noticia/2018/05/teto-de-shopping-em-sao-paulo-vira-horta-organica-de-5-mil-m.html?ambiente-desejado=int')
        
        cy.get('#content > div.paywall-cpt.paywall-cpt-globo-rural > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Galileu', function() {
        cy.visit('https://beta.revistagalileu.qa01.globoi.com/Ciencia/noticia/2018/05/engenheiros-desvendam-misterio-de-500-anos-na-torre-de-pisa.html?ambiente-desejado=int')
        
        cy.get('#content > div.paywall-cpt.paywall-cpt-galileu > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Crescer', function() {
        cy.visit('https://beta.revistacrescer.qa01.globoi.com/Diversao/Musica/noticia/2019/04/grupo-triiii-comemora-10-anos-com-shows-em-sao-paulo.html?ambiente-desejado=int')

        cy.get('#content > div.paywall-cpt.paywall-cpt-crescer > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na GQ', function() {
        cy.visit('https://beta.gq.qa01.globoi.com/Prazeres/Gastronomia/noticia/2018/10/20-chefs-italianos-vao-cozinhar-em-restaurantes-de-sao-paulo-por-uma-semana.html?ambiente-desejado=int')

        cy.get('#content > div.paywall-cpt.paywall-cpt-gq > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Monet', function() {
        cy.visit('https://beta.revistamonet.qa01.globoi.com/Celebridades/noticia/2018/03/blake-lively-posa-com-princesas-na-disney-e-se-oferece-para-ser-fera.html?ambiente-desejado=int')

        cy.get('#content > div.paywall-cpt.paywall-cpt-monet > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })

    it('exibiu barreira na Quem', function() {
        cy.visit('https://beta.quem.qa01.globoi.com/Entrevista/noticia/2018/10/ex-atriz-mirim-karina-ferrari-conta-por-que-manteve-gravidez-em-segredo-na-internet-tem-muito-odio.html?ambiente-desejado=int')

        cy.get('#content > div.paywall-cpt.paywall-cpt-quem-acontece > div > div.paywall-cpt-wrap__text-center > a')
            .should('be.visible')
    })
    
    it('exibiu barreira na Auto Esporte', function() {
        cy.visit('https://beta.revistaautoesporte.qa01.globoi.com/Noticias/noticia/2018/10/os-3-carros-mais-caros-em-producao-no-brasil.html?ambiente-desejado=int')
        
        cy.get('#paywall--paywall-inline > div > div.paywall--login-button > p > a')
            .should('be.visible')
    })

    it('exibiu barreira na Época', function() {
        cy.visit(' https://epocastg.globoi.com/teste-comentario-para-backlog-1118402?ambiente-desejado=int')

        cy.get('#paywall--paywall-inline > div > div.paywall--login-button > p > a')
            .should('be.visible')
    })


})