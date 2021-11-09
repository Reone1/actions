import { SignUpForm } from '@component/molecules';
import { mount, unmount } from '@cypress/react';

describe('Sign up Container Test', () => {
  beforeEach(() => {
    mount(<SignUpForm />);
  });

  it('Field Init', () => {
    cy.dataCy('id').find('label').contains('ID');
    cy.dataCy('id').find('input').should('have.attr', 'type', 'text');
    cy.dataCy('pw').find('label').contains('Password');
    cy.dataCy('pw').find('input').should('have.attr', 'type', 'password');
  });

  it('ID validation', () => {
    const idValid = {
      id: 'not Email',
      password: 'thisIsPassword1!',
      error: 'Please Enter Email',
    };
    cy.dataCy('id').type(idValid.id);
    cy.dataCy('pw').type(idValid.password);
    cy.get('button').click();
    cy.get('p').should('contain', idValid.error);
  });

  it('Password Validation', () => {
    const pwValid = {
      id: 'jw.choi@mxncommerce.com',
      password: '12',
      error: 'Please Enter Password',
    };
    cy.dataCy('id').type(pwValid.id);
    cy.dataCy('pw').type(pwValid.password);
    cy.get('button').click();
    cy.get('p').should('contain', pwValid.error);
  });

  it('Sign up Success', () => {
    const success = {
      id: 'jw.choi@mxncommerce.com',
      password: 'thisIsPassword1!',
    };

    cy.intercept('POST', 'http://localhost:3000/signup', {
      statusCode: 201,
      body: {
        accessToken: 'token',
      },
    }).as('success');

    cy.dataCy('id').type(success.id);
    cy.dataCy('pw').type(success.password);

    cy.get('button').click();
    cy.wait('@success');

    cy.window().then(() => {
      const token = localStorage.getItem('accessToken');
      expect(token).to.be.eql('token');
    });
  });

  it('Sign up Fail', () => {
    const fail = {
      id: 'jw.choi@mxncommerce.com',
      password: 'thisIsPassword1!',
    };
    cy.intercept('POST', 'http://localhost:3000/signup', {
      statusCode: 401,
      body: {
        message: 'error',
      },
    }).as('err');
    cy.dataCy('id').type(fail.id);
    cy.dataCy('pw').type(fail.password);

    cy.get('button').click();
    cy.get('@err').should('have.nested.property', 'response.body.message', 'error');
  });

  afterEach(() => {
    unmount();
  });
});
