/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('dds-feature-card-block-large (cdn)', () => {
  it('should load the default dds-feature-card-block-large example', () => {
    cy.visit('/feature-card-block-large/cdn.html');

    // Take a snapshot for visual diffing
    cy.percySnapshot('dds-feature-card-block-large | cdn | default');
  });
});
