import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "Pink_Passion": "#F27EB4",
      "Sky_Whisper": "#91E0F2",
      "Lemon_Zest": "#F2EB8D",
      "Golden_Honey": "#F2C879",
      "Coral_Sunset": "#F2856D"
    },
    extend: {
      backgroundImage: {
        'main-cupcake-one': "url('../public/cupcakes_high_angle.jpg')",
        'main-cupcake-two': "url('../public/cupcake.jpg')",
        'main-cupcake-three': "url('../public/cupcake_with_icing.jpg')",
        'main-cupcake-four': "url('../public/cupcake_four.jpg')",
        'main-cupcake-six': "url('../public/cupcake_sprickle.jpg')",
        'main-cupcake-seven': "url('../public/cupcake_oreo.jpg')",
        'main-cupcake-eight': "url('../public/Chocolate_Cupcake_with_Mint_Buttercream.jpg')",
        'main-cupcake-nine': "url('../public/cupcakes.jpg')",
        'chef-about-bg': "url('../public/chef.jpg')"
      }
    }
  },
  plugins: [],
};
export default config;
