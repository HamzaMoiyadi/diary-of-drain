export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: "Diary of Drain" || process.env.npm_package_name,
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Arvo:400,700|Josefin+Sans:300,400|Yatra+One"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#2196f3" },
    /*
     ** Global CSS
     */
    css: ["~/shared/globals.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://buefy.github.io/#/documentation
        "nuxt-buefy",
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/pwa",
        "@nuxtjs/eslint-module"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
