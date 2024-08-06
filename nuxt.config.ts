// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js
// import { defineNuxtConfig } from 'nuxt';
import dotenv from "dotenv";
dotenv.config();
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  // css:[`~/assets/css/main.css`],
  modules: [
    // "@nuxtjs/dotenv",
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    // "@nuxtjs /supabase",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
      apiKey: process.env.API_KEY,
    },
  },
  app: {
    head: {
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
});
