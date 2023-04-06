export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        config: {
            theme: {
                extend: {
                    colors: {
                        "white": "#ffffff",
                        "gray": "#f7f7f7",
                        "gray-3": "#ececec",
                        "gray-4": "#eaeaea",
                        "gray-5": "#e5e8ec",
                        "gray-6": "#d8dde3",
                        "gray-7": "#d9d9d9",
                        "blue-1": "#2a3f54",
                        "blue-2": "#2e4154",
                        "blue-3": "#3c5166",
                        "blue-4": "#3e4f61",
                        "blue-5": "#52606e",
                        "blue-6": "#5b738b",
                        "blue-7": "#24a1cb",
                        "turquoise": "#28c4c4",
                    },
                }
            }
        }
    },
})