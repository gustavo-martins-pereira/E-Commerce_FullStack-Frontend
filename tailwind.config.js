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
                "black-50": "hsla(0, 0%, 0%, 0.5)",
                "alto": "hsl(0, 0%, 85%)",
                "concrete": "hsl(0, 0%, 95%)",
                "alabaster": "hsl(0, 0%, 98%)",
                "custom-white": "hsl(0, 0%, 100%)",
                "custom-red": "hsl(0, 100%, 50%)",
                "cosmos": "hsl(0, 100%, 91%)",
                "sunset-orange": "hsl(5, 100%, 62%)", // MAIN COLOR
                "sunset-orange-25": "hsla(5, 100%, 62%, 0.33)",
                "sunset-orange-33": "hsla(5, 100%, 62%, 0.33)",
                "sunset-orange-50": "hsla(5, 100%, 62%, 0.50)",
                "fair-pink": "hsl(11, 100%, 95%)",
                "negroni-50": "hsla(25, 100%, 88%, 0.5)",
                "korma": "hsl(32, 81%, 29%)",
                "beeswax": "hsl(55, 97%, 88%)",
                "scandal": "hsl(141, 84%, 93%)",
                "jewel": "hsl(143, 64%, 24%)",
                "pickled-bluewood": "hsl(210, 29%, 24%)",
                "pattens-blue": "hsl(214, 95%, 93%)",
                "ebony": "hsl(221, 39%, 11%)",
                "persian-blue": "hsl(226, 71%, 40%)",
            },
            backgroundColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.sunset-orange"),
                "btn-secondary": "white",
                "btn-secondary--hover": theme("colors.cosmos"),

                // INPUTS
                "input-radius--checked": theme("colors.sunset-orange-50"),
                
                // ICONS
                "icon-primary--hover": theme("colors.sunset-orange-25"),
                "icon-primary--focus": theme("colors.sunset-orange-25"),

                // ========== MAIN COMPONENTS ==========
                "header": theme("colors.custom-white"),
                "page": theme("colors.alabaster"),
                "banner": theme("colors.fair-pink"),
                "order-card-pending-badge": theme("colors.beeswax"),
                "order-card-shipped-badge": theme("colors.pattens-blue"),
                "order-card-delivered-badge": theme("colors.scandal"),
                "order-details-table-header": theme("colors.sunset-orange"),
                "order-details-table-footer": theme("colors.sunset-orange"),
                "order-details-table-odd-line": theme("colors.concrete"),
                "order-details-table-even-line": theme("colors.custom-white"),
                "login-form": theme("colors.custom-white"),
                "popup-overlay": theme("colors.ebony"),
                "popup": theme("colors.custom-white"),
                "footer": theme("colors.custom-white"),

                // ===== SWIPER =====
                "swiper-pagination-bullet": theme("colors.sunset-orange"),
                "swiper-navigation-arrow": theme("colors.sunset-orange-33"),
            }),
            borderColor: theme => ({
                "primary": theme("colors.sunset-orange-25"),

                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.sunset-orange"),
                "btn-secondary": theme("colors.sunset-orange"),

                // INPUTS
                "input-text": theme("colors.sunset-orange"),

                // ========== MAIN COMPONENTS ==========
                "order-card": theme("colors.negroni-50"),
            }),
            boxShadowColor: theme => ({
                // SCROLLBAR
                "scrollbar-thumb": theme("colors.sunset-orange"),
                "scrollbar-track": theme("colors.alto"),
            }),
            textColor: theme => ({
                // ========== DUMB COMPONENTS ==========
                // BUTTONS
                "btn-primary": theme("colors.custom-white"),
                "accordion-arrow": theme("colors.sunset-orange"),

                // ICONS
                "icon-primary": theme("colors.sunset-orange"),

                // INPUTS
                "input-error": theme("colors.custom-red"),

                // LINKS
                "link-primary": theme("colors.sunset-orange"),

                // ========== MAIN COMPONENTS ==========
                // TODO: CHANGE TO GENERIC ORDER STATUS
                "order-card-pending-badge": theme("colors.korma"),
                "order-card-shipped-badge": theme("colors.persian-blue"),
                "order-card-delivered-badge": theme("colors.jewel"),

                // ===== SWIPER =====
                "breadcrumb-inactive": theme("colors.black-50"),

                // ===== SWIPER =====
                "swiper-navigation-arrow": theme("colors.sunset-orange"),
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
