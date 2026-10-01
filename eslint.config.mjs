import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = [
  ...nextConfig,
  prettierConfig,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "domi-reversi.mp4"],
  },
];

export default eslintConfig;
