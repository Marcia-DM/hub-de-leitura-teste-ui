/// <reference types="cypress/">
import { faker } from '@faker-js/faker';

describe('Funcionalidade Cadastro no Hub e Leitura', () => {

  beforeEach(() => {
    cy.visit('register.html')
  });

  it('Deve fazer cadastro com sucesso usando função JS', () => {
    let email = `teste${Date.now()}@teste.com.br`

    cy.get('#name').type("marcia")
    cy.get('#email').type(email)
    cy.get('#phone').type('11983766655')
    cy.get('#password').type('teste@1234')
    cy.get('#confirm-password').type('teste@1234')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

  })

  it('Deve fazer cadastro com sucesso usando Faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()

    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('11983766655')
    cy.get('#password').type('teste@1234')
    cy.get('#confirm-password').type('teste@1234')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.get('#user-name').should('contain', nome)

  })
})