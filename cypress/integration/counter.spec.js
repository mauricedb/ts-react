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

context('Person', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // cy.contains('Counter').click();
  });

  it('opens the page', () => {
    cy.get('[href="/person"]').click();

    cy.get(':nth-child(1) > input')
      .clear()
      .type('Jack');

    cy.get(':nth-child(2) > input')
      .clear()
      .type('Jones');

    cy.get('form.text-center > :nth-child(3)').should(
      'have.text',
      'Hello Jack Jones'
    );
  });
});

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
