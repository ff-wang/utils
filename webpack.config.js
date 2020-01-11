  const path = require('path')

  module.exports = {
    // 模式 
    // mode: 'development',  //开发模式
    mode: 'production',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'utils.min.js', //生产模式
      // filename: 'utils.js',
      libraryTarget: 'umd',
      library: 'utils' //向外暴露的对象的名称
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_' // 指向全局变量
      }
    }
  }