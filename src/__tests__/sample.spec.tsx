import { mount } from '@cypress/react';

import Home from '@pages/index';

describe('<CypressExample />', () => {
  beforeEach(() => {
    mount(<Home />);
  });

  it('Component rendering test', () => {
    cy.contains('Welcome to next.js app');
  });
});
