export function highlightAll() {
  if (window.Prism) {
    window.Prism.highlightAll();
  }
}

export function highlightElement(el) {
  if (window.Prism) {
    window.Prism.highlightElement(el);
  }
}
