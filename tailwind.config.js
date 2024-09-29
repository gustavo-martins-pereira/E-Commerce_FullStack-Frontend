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
                "sunset-orange-33": 	"hsla(5, 100%, 62%, 0.33)",
                "fair-pink": "hsl(11, 100%, 95%)",
                "pickled-bluewood": "hsl(210, 29%, 24%)",
            }),
            backgroundColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                "btn-primary": theme("colors.sunset-orange"),
                "btn-secondary": "white",
                "btn-secondary--hover": theme("colors.cosmos"),

                // ========== MAIN COMPONENTS ==========
                "page": theme("colors.alabaster"),
                "banner": theme("colors.fair-pink"),

                // ===== SWIPER =====
                "swiper-pagination-bullet": theme("colors.sunset-orange"),
            }),
            borderColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.sunset-orange"),
                "btn-secondary": theme("colors.sunset-orange"),

                // INPUTS
                "input": theme("colors.sunset-orange"),
            }),
            textColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.white"),
            }),
            outlineColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // INPUTS
                "input": theme("colors.sunset-orange-33"),
            }),
        },
    },
    plugins: [],
};
