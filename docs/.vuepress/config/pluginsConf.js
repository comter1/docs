const moment = require('moment');
const secret = require('./secret');
moment.locale("zh-cn");

module.exports = {
    '@vuepress/last-updated':{
      transformer: (timestamp) => moment(timestamp).format("LLLL")
      },
      '@vuepress/back-to-top':true,
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "新的风暴已经出现",
          buttonText: "迎接风暴吧"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'comter1',
        repo: 'docs',
        clientId: '3494b02dc6603a6aa085',
        clientSecret: '34215fdf3caddfcf67a65a94c808c251fa115874',
        autoCreateIssue:true
      },
      '@vuepress/google-analytics':{
        'ga': secret.ga
      },
    }