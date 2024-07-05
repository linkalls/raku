const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/bundle.js',
  loader: { '.css': 'css' }
}).catch(() => process.exit(1));
