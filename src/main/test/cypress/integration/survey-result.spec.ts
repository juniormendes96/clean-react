import * as Http from '../utils/http-mocks'
import * as Helper from '../utils/helpers'

const path = /\/api\/surveys/
const mockUnexpectedError = (): void => Http.mockServerError(path, 'GET')
const mockAccessDeniedError = (): void => Http.mockForbiddenError(path, 'GET')
const mockSuccess = (): void => Http.mockOk(path, 'GET', 'survey-result')

describe('SurveyResult', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helper.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('/surveys/any_id')

    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
  })

  it('Should logout on AccessDeniedError', () => {
    mockAccessDeniedError()
    cy.visit('/surveys/any_id')

    Helper.testUrl('/login')
  })

  it('Should present survey result', () => {
    mockSuccess()
    cy.visit('/surveys/any_id')

    cy.getByTestId('question').should('have.text', 'Question')

    cy.getByTestId('day').should('have.text', '03')
    cy.getByTestId('month').should('have.text', 'fev')
    cy.getByTestId('year').should('have.text', '2018')

    cy.get('li:nth-child(1)').then(li => {
      assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer')
      assert.equal(li.find('[data-testid="percent"]').text(), '70%')
      assert.equal(li.find('[data-testid="image"]').attr('src'), 'any_image')
    })

    cy.get('li:nth-child(2)').then(li => {
      assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer_2')
      assert.equal(li.find('[data-testid="percent"]').text(), '30%')
      assert.notExists(li.find('[data-testid="image"]'))
    })
  })

  it('Should go to SurveyList on back button click', () => {
    mockSuccess()
    cy.visit('')
    cy.visit('/surveys/any_id')

    cy.getByTestId('back-button').click()

    Helper.testUrl('/')
  })
})