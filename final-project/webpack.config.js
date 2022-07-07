// importar pacote
const path = require('path');

module.exports = {
    // arquivo entrada que será transformado pelo babel
    entry: '.src/js/script.js',
    // arquivo saida gerado em código antigo
    output: {
        // dirname - nome do diretório, 2o arg é o caminho onde será gerado
        path: path.resolve(__dirname, './'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
