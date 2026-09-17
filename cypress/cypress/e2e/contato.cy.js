/// <reference types="cypress/">

describe("Funcionalidade Contato", () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Marcia')
    cy.get('[name="email"]').type('marcia@teste.com.br')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de dúvidas')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  })

  it('Deve enviar mensagem quando não preencher o nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('marcia@teste.com.br')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de dúvidas')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo Nome.').should('exist')
  })

  it('Deve enviar mensagem quando não preencher o email', () => {
    cy.get('[name="name"]').type('Marcia')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de dúvidas')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo E-mail.').should('exist')
  })

  it('Deve enviar mensagem quando não preencher o assunto', () => {
    cy.get('[name="name"]').type('Marcia')
    cy.get('[name="email"]').type('marcia@teste.com.br')
    // cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de dúvidas')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, selecione o Assunto').should('exist')
  })

  it('Deve enviar mensagem quando não preencher a mensagem', () => {
    cy.get('[name="name"]').type('Marcia')
    cy.get('[name="email"]').type('marcia@teste.com.br')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    // cy.get('[name="message"]').type('Mensagem de dúvidas')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, escreva sua Mensagem.').should('exist')
  })

})