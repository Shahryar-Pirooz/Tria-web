/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: '#388CE7',
                green: '#3BDEA8',
                grey: '#3E3C41',
                white: '#FDFEFE',
                black: '#191919',
            },
        },
        fontFamily: {
            figtree: ['Figtree', 'sans-serif'],
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
