// @ts-check

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Login success Test', () => {
    cy.getBySel('pw').type('1234');
    cy.getBySel('id').type('jaewon');
    cy.getBySel('submit').click();
    cy.getBySel('form-title').contains('Login!');
  });

  it('Login Fail Test', () => {
    cy.getBySel('pw').type('1234');
    cy.getBySel('id').type('jaewo');
    cy.getBySel('submit').click();
    cy.getBySel('form-title').contains('Fail1');
  });
});
