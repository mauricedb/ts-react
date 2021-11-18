context('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("opens Schindler's List", () => {
    cy.get('[href="/movies"]').click();

    cy.contains("Schindler's List").click();

    cy.get('li').eq(0).should('have.text', 'Drama');
    cy.get('li').eq(1).should('have.text', 'History');
  });

  it('opens Pulp Fiction', () => {
    cy.routerNavigate('/movies');
    cy.contains('Pulp Fiction').click();

    cy.get('li').eq(0).should('have.text', 'Thriller');
    cy.get('li').eq(1).should('have.text', 'Crime');
  });
});
