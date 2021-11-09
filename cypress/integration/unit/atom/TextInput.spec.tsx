import { mount } from '@cypress/react';
import { TextInput } from '@component/atom';

describe('Textinput Test', () => {
  it('init state', () => {
    const initTestData = {
      text: 'Hello TextInput',
      label: 'label',
      type: 'text',
      error: undefined,
    };
    mount(<TextInput data-cy='id' {...initTestData} />);
    cy.get('label').contains(initTestData.label);
    cy.dataCy('id').type(initTestData.text);
    cy.dataCy('id').should('have.attr', 'text', initTestData.text);
    cy.dataCy('id').get('input').should('have.attr', 'type', 'text');
  });

  it('error state', () => {
    const errorData = {
      text: 'Hello TextInput',
      label: 'Error',
      type: 'text',
      error: 'input Type Error',
    };
    mount(<TextInput data-cy='id' {...errorData} />);
    cy.get('label').contains(errorData.label);
    cy.get('p').contains(errorData.error);
    cy.get('p').should('have.css', 'color', 'rgb(211, 47, 47)');
    cy.get('fieldset').should('have.css', 'border-color', 'rgb(211, 47, 47)');
  });
});
