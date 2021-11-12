// @ts-check

import { mount, unmount } from '@cypress/react';
import LoginForm from './LoginForm';

describe('example app', () => {
  beforeEach(() => {
    mount(<LoginForm />);
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
    cy.getBySel('form-title').contains('Fail');
  });
  afterEach(() => {
    unmount();
  });
});
