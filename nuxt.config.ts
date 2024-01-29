import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        typeCheck: true
    },
    modules: ['nuxt-primevue'],

    primevue: {
        options: {
            unstyled: true
        },
        importPT: { from: path.resolve(__dirname, './presets/lara/') as string, as: 'lara' }
    },

    css: ['~/assets/styles/style.css', '/node_modules/primeicons/primeicons.css', '@/assets/styles/flags.css', '@/assets/styles/layout/layout.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
});
