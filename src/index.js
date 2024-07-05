import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/atom-one-dark.min.css';
import rakuStyles from '../raku.css';

// CSSをインラインで埋め込む
const style = document.createElement('style');
style.textContent = `
  ${require('highlight.js/styles/atom-one-dark.css')}
  ${rakuStyles}
`;
document.head.append(style);

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
});

console.log('Highlight.js has been loaded');