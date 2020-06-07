context('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // cy.contains('Counter').click();
  });

  it('opens the page', () => {
    cy.get('[href="/movies"]').click();

    cy.contains("Schindler's List").click();

    cy.get('ul > :nth-child(1)').should('have.text', 'Drama');
  });
});
