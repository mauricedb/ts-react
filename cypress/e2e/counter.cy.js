context('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('Counter').click();
  });

  it('opens the page', () => {
    cy.contains('Count: ').should('contain', '0');
    cy.contains('Increment').click();
    cy.contains('Count: ').should('contain', '1');
    cy.contains('Increment').click();
    cy.contains('Count: ').should('contain', '2');
  });
});
