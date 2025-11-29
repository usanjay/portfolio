/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-4px)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out infinite",
      },
      boxShadow: {
        "gradient-pink-purple":
          "0 10px 40px -5px rgba(236, 72, 153, 0.5), 0 20px 60px -10px rgba(139, 92, 246, 0.4)",
      },
    },
  },
  plugins: [],
};
