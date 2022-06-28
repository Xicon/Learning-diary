// 1. 下载第三库@craco/craco 来修改CRA的webpack配置文件
// 2. 增加craco.config.js 来修改webpack的配置
// 3. 对package.json 的 scripts 进行修改,使用craco来接替CRA的操作
// 4. 添加@别名提高效率

const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}