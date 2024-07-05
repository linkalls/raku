import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.min.css';
import '../raku.css';



document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

console.log('Highlight.js has been loaded'