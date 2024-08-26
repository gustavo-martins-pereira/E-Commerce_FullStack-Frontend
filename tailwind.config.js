/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // PRIMITIVE COLORS
                "black-05": "hsla(0, 0%, 0%, 0.5)",
                "pickled-bluewood": "hsl(210, 29%, 24%)",
                // COMPOSITE COLORS
                "button-default-color": "hsl(0, 0%, 0%)",
            },
            backgroundColor: theme => ({
                "btn-secondary": theme("colors.button-default-color"),
            }),
            borderColor: theme => ({
                // ========== GENERIC COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.button-default-color"),
                // HEADER MENU
                "header-menu": theme("colors.pickled-bluewood"),
            }),
        },
    },
    plugins: [],
};
