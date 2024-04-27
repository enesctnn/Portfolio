/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                ellipse:
                    'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
            },
            fontFamily: { ubuntu: ['"Ubuntu"', 'sans-serif'] },
        },
    },
    plugins: [],
};
