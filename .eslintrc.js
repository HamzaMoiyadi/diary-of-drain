module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: ["plugin:nuxt/recommended"],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        quotes: [0]
    }
}
