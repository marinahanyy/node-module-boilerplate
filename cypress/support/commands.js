"use strict";

/// <reference types="cypress" />

// This file demonstrates how to create various custom Cypress commands.

// Parent command: Login
Cypress.Commands.add('login', (email, password) => {
  // Implementation of login command
  // ...
});

// Child command: Drag
Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject, options) => {
  // Implementation of drag command
  // ...
});

// Child command: Dismiss
Cypress.Commands.add('dismiss', { prevSubject: 'optional' }, (subject, options) => {
  // Implementation of dismiss command
  // ...
});

// Dual command: Visit
Cypress.Commands.add('visit', { prevSubject: 'optional' }, (subject, options) => {
  // Implementation of visit command
  // ...
});

// Overwriting an existing command: Visit
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  // Implementation of overwritten visit command
  // ...
});

// Additional namespace and interface declarations (commented out in this example)
// These can be uncommented and modified based on your needs
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>;
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>;
//     }
//   }
// }
