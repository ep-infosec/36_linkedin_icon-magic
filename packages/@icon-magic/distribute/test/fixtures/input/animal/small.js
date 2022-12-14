/**
 * Auto-generated by @icon-magic plugin
 * https://github.com/linkedin/icon-magic
 *
 * Usage:
 *
 * JS
 * import testPrefixAnimalSmall './test-prefix-animal-small';
 * testPrefixAnimalSmall();
 *
 * HTML
 * <test-prefix-animal-small></test-prefix-animal-small>
 */
export default function () {
  // Can't register the same tag more than once. Throws DOMException.
  if (window && !window.customElements.get('test-prefix-animal-small')) {
    window.customElements.define(
      'test-prefix-animal-small',
      class extends HTMLElement {
        // when the element is inserted into DOM
        connectedCallback() {
          this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" role="none" data-supported-dps="24x24" fill="currentColor"><path d="M9 12.33A1.33 1.33 0 1110.34 11 1.33 1.33 0 019 12.33zM16.33 11A1.33 1.33 0 1015 12.33 1.32 1.32 0 0016.33 11zM14 14h-4v2h1v2h2v-2h1zm8 0a6 6 0 01-6 6 5 5 0 01-8 0A6 6 0 014.08 9.48a4 4 0 114.46-6.56 7 7 0 016.92 0 4 4 0 114.46 6.56A6 6 0 0122 14zM18 3.88a2.08 2.08 0 00-1 .25 6.92 6.92 0 011.9 3.78 2.11 2.11 0 00-.9-4zM3.88 6A2.11 2.11 0 005.1 7.91 6.92 6.92 0 017 4.13a2.08 2.08 0 00-1-.25A2.12 2.12 0 003.88 6zm16.24 8a4.12 4.12 0 00-2.07-3.57l-.91-.53v-1a5.12 5.12 0 00-10.24 0v1l-.9.53a4.12 4.12 0 002 7.69h1l.56.75a3.09 3.09 0 005 0l.56-.75h1a4.12 4.12 0 004-4.12z"/></svg>';
        }
      }
    );
  }
}
