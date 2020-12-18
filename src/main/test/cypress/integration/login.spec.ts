import faker from 'faker'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('email').should('have.attr', 'readOnly')
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('contain.text', '🔴️')

    cy.getByTestId('password').should('have.attr', 'readOnly')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo obrigatório')
      .should('contain.text', '🔴️')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('contain.text', '🔴️')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('contain.text', '🔴️')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
