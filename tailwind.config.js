/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    screens: {
      tablet: '640px',
      'tablet-semi': '768px',
      laptop: '1024px',
      desktop: '1280px',
      'desktop-full': '1536px',
    },
    colors: {
      primary: '#4F709C', // Customizing the primary color
      secondary: '#213555', // Customizing the secondary color
      cream: '#F5EFE7',
      brown: '#D8C4B6',
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },
    fontFamily: {
      poppinsBold: ['var(--font-poppins-bold)'], // Adding a custom font family
      poppinsMedium: ['var(--font-poppins-medium)'], // Adding a custom font family
      poppinsLight: ['var(--font-poppins-light)'], // Adding a custom font family
    },
  },
}
export const plugins = []
export const darkMode = 'class'
