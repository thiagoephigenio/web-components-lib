import esbuild from 'esbuild';

const config = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2015'],
  external: ['react', 'react-dom'],
};

esbuild.build({
  ...config,
  format: 'esm',
  outfile: 'dist/index.mjs',
}).catch(() => process.exit(1));

esbuild.build({
  ...config,
  format: 'cjs',
  outfile: 'dist/index.cjs',
}).catch(() => process.exit(1));