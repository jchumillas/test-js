module.exports = {
    mode: 'development',
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                    }
                }
            }
        ]
    }
};