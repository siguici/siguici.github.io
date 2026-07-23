// src/scripts/preloader.ts
export class Preloader {
  private destroyed = false;
  private timeoutId: ReturnType<typeof setTimeout> | undefined;
  private loadListener: (() => void) | undefined;

  readonly element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  show(): void {
    this.element.classList.remove('loaded', 'hidden');
  }

  hide(): void {
    if (this.destroyed) return;

    this.element.classList.add('loaded');

    this.timeoutId = setTimeout(() => {
      if (typeof globalThis.requestAnimationFrame === 'function') {
        globalThis.requestAnimationFrame(() => this.destroy());
      } else {
        this.destroy();
      }
    }, 600);

    this.element.addEventListener(
      'transitionend',
      () => {
        this.destroy();
      },
      { once: true },
    );
  }

  private clear(): void {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    if (this.loadListener) {
      globalThis.removeEventListener('load', this.loadListener);
      this.loadListener = undefined;
    }
  }

  destroy(): void {
    if (this.destroyed) return;

    this.destroyed = true;
    this.clear();
    this.element.remove();
  }

  mount(): void {
    if (document.readyState === 'complete') {
      queueMicrotask(() => this.hide());
      return;
    }

    this.loadListener = () => this.hide();
    globalThis.addEventListener('load', this.loadListener, { once: true });
  }

  static bootstrap(): void {
    const element = document.getElementById('preloader');

    if (element instanceof HTMLElement) {
      new Preloader(element).mount();
    }
  }
}
