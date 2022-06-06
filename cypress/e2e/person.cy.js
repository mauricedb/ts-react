context('Person', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('opens the page', () => {
    cy.get('[href="/person"]').click();

    cy.get(':nth-child(1) > input').clear().type('Jack');

    cy.get(':nth-child(2) > input').clear().type('Jones');

    cy.get('form.text-center > :nth-child(3)').should(
      'have.text',
      'Hello Jack Jones'
    );
  });
});
