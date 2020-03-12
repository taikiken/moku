import 'intersection-observer';

/**
 * `IntersectionObserver` 表示されたかをチェックします
 * - 画面縦幅より大きな `HTMLElement` には反応しないので注意します
 */
export default class Intersection {
  /**
   * `IntersectionObserver` callback
   * - `isIntersecting` property を使用し hit しているかを判定します
   * @param {Array<IntersectionObserverEntry>} entries `IntersectionObserverEntry` list
   * @see https://wiki.developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_concepts_and_usage
   * @see https://wiki.developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
   */
  check = entries => {
    entries.map(entry => (entry.isIntersecting ? this.intersect(entry) : this.parallel(entry)));
  };

  /**
   * `IntersectionObserver` 準備します
   * @param {Array<HTMLElement>} elements target Element list
   * @param {{root: ?HTMLElement, rootMargin: string, threshold: Array<number>}} options `IntersectionObserver` option
   */
  constructor(
    elements,
    options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.5],
    }
  ) {
    /**
     * target Element list
     * @type {Array<HTMLElement>}
     */
    this.elements = elements;
    /**
     * `IntersectionObserver` instance
     * @type {IntersectionObserver}
     */
    this.observer = new IntersectionObserver(this.check, options);
  }

  /**
   * `IntersectionObserver` 開始する
   */
  start() {
    this.elements.map(element => this.activate(element));
  }

  destroy() {
    this.elements.map(element => this.deactivate(element));
    this.disconnect();
  }

  disconnect() {
    this.observer.disconnect();
  }

  activate(element) {
    this.observer.observe(element);
  }

  deactivate(element) {
    this.observer.unobserve(element);
  }

  intersect(entry) {
    console.log('Intersection.intersect - entry', entry);
  }

  parallel(entry) {
    console.log('Intersection.parallel - entry', entry);
  }
}
