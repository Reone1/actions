// @ts-check
import { mount } from '@cypress/react';
import TextInput from './TextInput';

describe('TextInput Test', () => {
  it('Label', () => {
    const label = 'ID';
    mount(<TextInput label={label} type="text" />);
    cy.get('label').should('contain', label);
  });

  it('Input', () => {
    const initConstants = {
      input: 'jaewon',
      color: 'rgb(0, 0, 0)',
    };
    mount(<TextInput label="ID" data-cy="id" type="text" />);

    cy.getBySel('id').type(initConstants.input);
    cy.getBySel('id').should('have.css', 'border-color', initConstants.color);
  });

  it('Error Attribute Test', () => {
    const errorConstant = {
      input: '',
      errorText: 'error',
      color: 'rgb(211, 47, 47)',
    };

    mount(
      <TextInput
        label="id"
        data-cy="id"
        type="text"
        error={errorConstant.errorText}
      />,
    );
    cy.get('fieldset').should('have.css', 'border-color', errorConstant.color);
    cy.get('p').should('contain', errorConstant.errorText);
  });
});
