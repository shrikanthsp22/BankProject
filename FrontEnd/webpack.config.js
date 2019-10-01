const path=require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports={
    //there are four core conceptsfor webapck
    //entry point,outputs, loaders and plugins

    entry: ['babel-polyfill','./src/js/index.js'],//says where to start looking
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js' //says where to save the bundled files
            },

    // instead of building the webpack again and again using npm run build , we can do the below so that it automatically does it for us
    devServer:{
        contentBase :'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"//index html will be dynamically sent and displayed in the browse and it will take the files from the template directory

        })
    ],//receives an array of all the plugins
// babel rules
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }


};

