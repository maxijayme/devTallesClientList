describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('maxi@test.es')
    cy.get('.action-email').should('have.value', 'maxi@test.es')
  })
})
