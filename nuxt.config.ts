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
                        "gray-7": "#e0e0e0",
                        "blue-1": "#2a3f54",
                        "blue-2": "#2e4154",
                        "blue-3": "#3c5166",
                        "blue-4": "#3e4f61",
                        "blue-5": "#52606e",
                        "blue-6": "#5b738b",
                        "blue-7": "#21a0d1",
                        "green-1": "#8fc03a",
                        "green-2": "#31b799",
                        "green-3": "#249d85",
                        "turquoise": "#28c4c4",
                        "turquoise-2": "#50b7b7",
                        "turquoise-3": "#429998",
                    },
                }
            }
        }
    },
})