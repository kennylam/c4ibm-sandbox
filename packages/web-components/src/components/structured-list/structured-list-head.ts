/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BXStructuredListHead from 'carbon-web-components/es/components/structured-list/structured-list-head';
import { customElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './structured-list.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

@customElement(`${ddsPrefix}-structured-list-head`)
class DDSStructuredListHead extends BXStructuredListHead {
  connectedCallback() {
    super.connectedCallback();
  }

  static styles = styles;
}

export default DDSStructuredListHead;
