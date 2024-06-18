import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        minion: ['Minion-Bold'],
        trajanPro: ['TrajanPro'],
        times: ['Times-New-Roman'],
      },
    },
  },
  plugins: [],
};
export default config;
