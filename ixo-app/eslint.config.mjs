import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylisticTs from '@stylistic/eslint-plugin-ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  stylisticTs.configs.all,
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      '@stylistic/ts/indent': [ 'error', 2 ],
      // "@stylistic/ts/semi": ["error", "never"],
      '@stylistic/ts/quote-props': [ 'error', 'as-needed' ],
      '@stylistic/ts/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/ts/quotes': [ 'error', 'single' ],
      '@/array-bracket-spacing': [ 'error', 'always' ]
    }
  }
];

console.log(eslintConfig);

export default eslintConfig;
