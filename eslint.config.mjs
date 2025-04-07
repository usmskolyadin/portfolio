import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Отключаем правило для неиспользуемых переменных
      '@typescript-eslint/no-explicit-any': 'off', // Отключаем правило для any
      '@typescript-eslint/no-wrapper-object-types': 'off', // Отключаем правило для оберточных типов
    },
  })
];

export default eslintConfig;
