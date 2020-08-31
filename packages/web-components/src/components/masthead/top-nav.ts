/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { property, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import BXHeaderNav from 'carbon-web-components/es/components/ui-shell/header-nav';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './masthead.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Masthead top nav.
 *
 * @element dds-top-nav
 */
@customElement(`${ddsPrefix}-top-nav`)
class DDSTopNav extends StableSelectorMixin(BXHeaderNav) {
  /**
   * `true` to hide the divider.
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-divider' })
  hideDivider = false;

  static get stableSelector() {
    return `${ddsPrefix}--masthead__l0-nav`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSTopNav;