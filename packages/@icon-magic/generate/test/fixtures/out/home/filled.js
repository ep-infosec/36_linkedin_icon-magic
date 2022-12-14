/**
 * Auto-generated by @icon-magic plugin
 * https://github.com/linkedin/icon-magic
 *
 * Usage:
 *
 * JS
 * import iconMagicHomeFilled './icon-magic-home-filled';
 * iconMagicHomeFilled();
 *
 * HTML
 * <icon-magic-home-filled></icon-magic-home-filled>
 */
export default function () {
  // Can't register the same tag more than once. Throws DOMException.
  if (window && !window.customElements.get('icon-magic-home-filled')) {
    window.customElements.define(
      'icon-magic-home-filled',
      class extends HTMLElement {
        // when the element is inserted into DOM
        connectedCallback() {
          this.innerHTML = '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>32dp</title><path d="M28,13.36L16.64,6.19a1.2,1.2,0,0,0-1.28,0L4,13.34l1,1.59,2-1.25V25a1,1,0,0,0,1,1h6V21h4v5h6a1,1,0,0,0,1-1V13.67L27,15Z" style="fill: #737373"/></svg>';
        }
      }
    );
  }
}
