describe('SSR Test', () => {
  it('skips client-side bundle', () => {
    cy.request('/product')
      .its('body')
      .then(html => {
        // remove the application code bundle
        html = html.replace('<script src="/bundle.js"></script>', '');
        cy.document().invoke({ log: false }, 'write', html);
      });
    // now we can use "normal" Cypress api to confirm
    // number of list element
    cy.get('svg').should('have.attr', 'focusable').and('eq', 'false');
  });

  it('disables component methods from createReactClass', () => {
    let createReactClass: Function;
    cy.window().then(win => {
      Object.defineProperty(win, 'createReactClass', {
        get() {
          return (definition: any) => {
            console.log('1');
            definition.componentDidMount = cy.stub().as('componentDidMount');
            return createReactClass(definition);
          };
        },
        set(fn) {
          createReactClass = fn;
        },
      });
    });
    cy.request('/product')
      .its('body')
      .then(html => {
        cy.document().invoke({ log: false }, 'write', html);
      });
    cy.get('@componentDidMount').should('have.been.calledOnce');
    cy.get('svg').should('have.attr', 'focusable').and('eq', 'false');
    // since we disabled componentDidMount the button should
    // never become enabled
  });
});
