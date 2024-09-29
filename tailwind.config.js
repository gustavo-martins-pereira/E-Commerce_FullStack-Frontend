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
                "alabaster": "hsl(0, 0%, 98%)",
                "white": "hsl(0, 0%, 100%)",
                "cosmos": "hsl(0, 100%, 91%)",
                "sunset-orange": 	"hsl(5, 100%, 62%)",
                "sunset-orange-33": 	"hsla(5, 100%, 62%, 0.33)",
                "fair-pink": "hsl(11, 100%, 95%)",
                "negroni-50": "hsla(25, 100%, 88%, 0.5)",
                "negroni-20": "hsla(25, 100%, 88%, 0.2)",
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
                "order-details-table-header": theme("colors.sunset-orange"),
                "order-details-table-footer": theme("colors.sunset-orange"),
                "order-details-table-odd-line": theme("colors.negroni-20"),
                "order-details-table-even-line": theme("colors.white"),

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

                // ========== MAIN COMPONENTS ==========
                "order-card": theme("colors.negroni-50"),
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
