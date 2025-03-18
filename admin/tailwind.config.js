/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all React components
    ],
    theme: {
      extend: {
        colors: {
          primary: "#29AB87"// Admin panel primary color
          
        }
      },
    },
    plugins: [],
  };
  