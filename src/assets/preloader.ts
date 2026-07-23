import './preloader.css';

document.addEventListener('DOMContentLoaded', () => {
  let preloader = document.getElementById('preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = '<span>Loading&hellip;</span>';
    document.body.insertBefore(preloader, document.body.firstChild);
  }

  if (document.body.contains(preloader)) {
    preloader.classList.add('loaded');

    const timeoutId = setTimeout(() => {
      if (globalThis.requestAnimationFrame) {
        globalThis.requestAnimationFrame(() => remove(preloader));
      } else {
        remove(preloader);
      }
    }, 1000);

    preloader.addEventListener('transitionend', () => {
      clearTimeout(timeoutId);
      remove(preloader);
    });
  }
});

function remove(element: HTMLElement): void {
  if (!element) {
    return;
  }

  if (element.remove) {
    element.remove();
  }

  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}
