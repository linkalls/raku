const esbuild = require('esbuild');
const inlineCss = require('esbuild-plugin-inline-css');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/bundle.js',
  plugins: [inlineCss()],
  loader: { '.css': 'css' },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).catch(() => process.exit(1));
