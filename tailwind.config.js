/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: theme => ({
                // PRIMITIVE COLORS
                "black-50": "hsla(0, 0%, 0%, 0.5)",
                "cosmos": "hsl(0, 100%, 91%)",
                "alabaster": "hsl(0, 0%, 98%)",
                "sunset-orange": 	"hsl(5, 100%, 62%)",
                "pickled-bluewood": "hsl(210, 29%, 24%)",
            }),
            backgroundColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                "btn-primary": theme("colors.sunset-orange"),
                "btn-secondary": "white",
                "btn-secondary--hover": theme("colors.cosmos"),

                // ========== MAIN COMPONENTS ==========
                "page": theme("colors.alabaster"),
            }),
            borderColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.sunset-orange"),
                "btn-secondary": theme("colors.sunset-orange"),
            }),
            textColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.white"),
            }),
        },
    },
    plugins: [],
};
