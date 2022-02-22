/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "346e25ab349d87315bd209386d90fb21"
  },
  {
    "url": "About/about.html",
    "revision": "b835e0dd7e43dcabf2a28c93db51f2be"
  },
  {
    "url": "About/index.html",
    "revision": "c33e46aa081849c5a7cdcbfdd9271a29"
  },
  {
    "url": "assets/css/0.styles.ecff28a1.css",
    "revision": "7afc4f033d2e50398954e4ea465c01e6"
  },
  {
    "url": "assets/img/doudou.png",
    "revision": "d679bedefaf5e2e2398503441ed2a5db"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "c6a069741931a20497c6c275917058e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.34626023.js",
    "revision": "5a380a56992656603b4aac659f89ad00"
  },
  {
    "url": "assets/js/11.2ac89a3d.js",
    "revision": "4dd2e87d4d466ddde8b324d867ee0048"
  },
  {
    "url": "assets/js/12.e7404ebf.js",
    "revision": "17e38b6d1a14dd476e8a3ebade66c444"
  },
  {
    "url": "assets/js/13.4a2cc5f3.js",
    "revision": "ddb3bcc4314a4d8939108054dcd67c89"
  },
  {
    "url": "assets/js/14.8aaaa77a.js",
    "revision": "5b780c36a4fe4f703cb17cad4ca3b360"
  },
  {
    "url": "assets/js/15.9005c811.js",
    "revision": "e21424ea32f5ff14eddb39790b4259a2"
  },
  {
    "url": "assets/js/16.3cbf16e6.js",
    "revision": "8f3daf8871b8acd77ad20be50865b66c"
  },
  {
    "url": "assets/js/17.0ddbe9a0.js",
    "revision": "4f69ad30e9609209a81a4738f4c1e1e2"
  },
  {
    "url": "assets/js/18.c54a7be7.js",
    "revision": "fc962b1bf46a4d0df77ae2c59e34e3df"
  },
  {
    "url": "assets/js/19.c5d6248b.js",
    "revision": "3236a039ad453e602fbc5e12abcbc10b"
  },
  {
    "url": "assets/js/2.24d63958.js",
    "revision": "2b3ee5bab4b0eea18deb45b901bb5c2c"
  },
  {
    "url": "assets/js/3.27bbf4a7.js",
    "revision": "69078c84b41b0fefc6379b0baf5954a4"
  },
  {
    "url": "assets/js/4.de43ab5f.js",
    "revision": "7f3918490c3583c2a39c2f1034364d45"
  },
  {
    "url": "assets/js/5.e7482b35.js",
    "revision": "e12fa2530f681927e7cf596442da2867"
  },
  {
    "url": "assets/js/6.7bc63dac.js",
    "revision": "c0168c650be8d2509ff21c84bc6012d9"
  },
  {
    "url": "assets/js/7.a4dad546.js",
    "revision": "629a1769090d2d7dc5ef2cc16bb4b709"
  },
  {
    "url": "assets/js/8.4e23ed57.js",
    "revision": "71d210d86e1931099174a419a74b83c0"
  },
  {
    "url": "assets/js/9.41582966.js",
    "revision": "39faff2bcf3a6cc48bc9e18d29ffce1a"
  },
  {
    "url": "assets/js/app.e9537389.js",
    "revision": "f7165065301e1158e95e4ff9625e1a78"
  },
  {
    "url": "icons/t1-1.jpg",
    "revision": "e4ad0b4e0cd13b177890a365b4ddb854"
  },
  {
    "url": "icons/t1-2.jpg",
    "revision": "9ada6161399140f4faee4e1f9bcc8bd4"
  },
  {
    "url": "icons/t1-3.jpg",
    "revision": "2d983b66f74f7036c514aa00ce7f0572"
  },
  {
    "url": "icons/ts1.svg",
    "revision": "f96152140fe7897e7e9e4f96947f9d3e"
  },
  {
    "url": "index.html",
    "revision": "e074371d26b2e94cbadcfe5a079d53ed"
  },
  {
    "url": "命令语言/C++基本学习.html",
    "revision": "a9f4442718f01a44a8df92b162f54dcb"
  },
  {
    "url": "命令语言/Linux简单命令.html",
    "revision": "bca6a98f5a835e841fa39742c81584fd"
  },
  {
    "url": "社会感知数据分析/论文学习/Living in a pandemic.html",
    "revision": "94b81a8ebfb1616ed23351eb04db5bcc"
  },
  {
    "url": "社会感知数据分析/论文学习/人类行为时空特性的统计力学.html",
    "revision": "3de97ae95d2728fa41303f9da65e82ac"
  },
  {
    "url": "视觉/shijue.html",
    "revision": "55426c19b5650dec6c8ec6058d679bdf"
  },
  {
    "url": "计算机网络/前言.html",
    "revision": "3374a0534d2ec4601b36c7220beb520c"
  },
  {
    "url": "计算机网络/第一章.html",
    "revision": "a0f1537e7b18a3e0c555964163871ced"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
