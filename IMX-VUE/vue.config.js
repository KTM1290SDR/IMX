module.exports = {
  devServer: {
    open: true,
    host:"localhost",
    proxy: {
      "/api": {
        //请求称号
        target: "http://localhost:7001", //请求的接口
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  publicPath: './',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
};