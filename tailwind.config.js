/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                burgundy: "#9A0000",
                yellow: "#FFB319",
            }
        },
    },
    plugins: [],
}

