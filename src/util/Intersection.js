import 'intersection-observer';


/**
 * `IntersectionObserver` 表示されたかをチェックします
 * - 画面縦幅より大きな `HTMLElement` には反応しないので注意します
 */
export default class Intersection {
  check = (entries) => {
    entries.map(entry => (
      entry.isIntersecting ? this.intersect(entry) : this.parallel(entry)
    ))
  }

  constructor(
    elements,
    options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.5],
    },
  ) {
    this.elements = elements
    this.observer = new IntersectionObserver(this.check, options);
  }

  start() {
    this.elements.map(element => this.activate(element))
  }

  destroy() {
    this.elements.map(element => this.deactivate(element))
    this.disconnect()
  }

  disconnect() {
    this.observer.disconnect()
  }

  activate(element) {
    this.observer.observe(element)
  }

  deactivate(element) {
    this.observer.unobserve(element);
  }

  intersect(entry) {
    console.log('Intersection.intersect - entry', entry)
  }

  parallel(entry) {
    console.log('Intersection.parallel - entry', entry)
  }
}
