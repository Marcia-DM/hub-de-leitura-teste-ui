/// <reference types="cypress/">

describe('Funcionalidade Cadastro no Hub e Leitura', () => {

  beforeEach(() => {
    cy.visit('register.html')
  });

  it('Deve fazer cadastro com sucesso', () => {
    let email = `teste${Date.now()}@teste.com.br`
    
    cy.get('#name').type('Marcia')
    cy.get('#email').type(email)
    cy.get('#phone').type('11983766655')
    cy.get('#password').type('teste@1234')
    cy.get('#confirm-password').type('teste@1234')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

  })
})