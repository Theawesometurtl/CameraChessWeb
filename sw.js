if(!self.define){let e,r={};const o=(o,a)=>(o=new URL(o+".js",a).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(a,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let s={};const n=e=>o(e,i),b={module:{uri:i},exports:s,require:n};r[i]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(f(...e),s)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"480L_xcorners_float16/group1-shard10of21.bin",revision:"9b97f723f3e99c6cfb5d60602f8e035a"},{url:"480L_xcorners_float16/group1-shard11of21.bin",revision:"8506166c8552022ad6746fca23d1b445"},{url:"480L_xcorners_float16/group1-shard12of21.bin",revision:"454569a5ce5aef2f025ebcc3a8e3bec0"},{url:"480L_xcorners_float16/group1-shard13of21.bin",revision:"9287bf39f3a4758bde942f2f1f212c36"},{url:"480L_xcorners_float16/group1-shard14of21.bin",revision:"811c683859366222fd729e2ed9548507"},{url:"480L_xcorners_float16/group1-shard15of21.bin",revision:"09f1ed32823efde3aa9f860e1a19f453"},{url:"480L_xcorners_float16/group1-shard16of21.bin",revision:"96139ac8d1246d7eb2dea06a250013b3"},{url:"480L_xcorners_float16/group1-shard17of21.bin",revision:"aa32d273c65c90db6638877b9da73f5e"},{url:"480L_xcorners_float16/group1-shard18of21.bin",revision:"ee988a83883a33593bb9f86c423aa62b"},{url:"480L_xcorners_float16/group1-shard19of21.bin",revision:"495bb62f6240b6b322855bfc7a084c2b"},{url:"480L_xcorners_float16/group1-shard1of21.bin",revision:"dd9b143190b80b197663c53511dc08e4"},{url:"480L_xcorners_float16/group1-shard20of21.bin",revision:"7a08a5f1b7796c6a1909a3848af9498a"},{url:"480L_xcorners_float16/group1-shard21of21.bin",revision:"25b3c867ebe2edaea40cedb47bc7b685"},{url:"480L_xcorners_float16/group1-shard2of21.bin",revision:"47aab1cbb0f6c6b596674deb6286c788"},{url:"480L_xcorners_float16/group1-shard3of21.bin",revision:"8404f6e0fd154e0e6ae38b8f84c300ac"},{url:"480L_xcorners_float16/group1-shard4of21.bin",revision:"ec175e2ad4da59b27332976ef0a66174"},{url:"480L_xcorners_float16/group1-shard5of21.bin",revision:"a0389d5bc849af0e49f64bfce8e99f0b"},{url:"480L_xcorners_float16/group1-shard6of21.bin",revision:"b1a8ae678084f6fe755796547361b034"},{url:"480L_xcorners_float16/group1-shard7of21.bin",revision:"30bdd2c63b0bf1ddaad00ad8d9736072"},{url:"480L_xcorners_float16/group1-shard8of21.bin",revision:"b9b8998ebc4ad55436b16ddaf077bbf5"},{url:"480L_xcorners_float16/group1-shard9of21.bin",revision:"9851c1f6525f4c53d6e8e41b95f83a9e"},{url:"480L_xcorners_float16/model.json",revision:"e78f542a4031616671a329cb33c5f292"},{url:"480S_pieces_float16/group1-shard1of4.bin",revision:"44ebadf996a776c410ae3e13eb3422af"},{url:"480S_pieces_float16/group1-shard2of4.bin",revision:"94c2acaeebd6efad8e7dacf0b9f69486"},{url:"480S_pieces_float16/group1-shard3of4.bin",revision:"fa58561293f3c79fef8badc4c7320a19"},{url:"480S_pieces_float16/group1-shard4of4.bin",revision:"d9bc4e889a9a43c37ea2bb14f0a262b8"},{url:"480S_pieces_float16/model.json",revision:"066106905354ee8a67c90272d7c7d3e6"},{url:"android-chrome-192x192.png",revision:"5ed7c88c5f9832975d2d712e3c3279aa"},{url:"android-chrome-512x512.png",revision:"503e15530e2e7ada29b13ba5b5c6bdf0"},{url:"apple-touch-icon.png",revision:"0dd06a2f7282f94dd15f88719dcd65aa"},{url:"assets/index-L8DtsB5q.css",revision:null},{url:"assets/index-XhhNP7Nd.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"favicon-16x16.png",revision:"4b61f90fa202207450ae081e78dcc127"},{url:"favicon-32x32.png",revision:"ae96e1b49d6f7c017041e2123f71340f"},{url:"favicon.ico",revision:"6b58d536191d817fe0314ee80ec12abd"},{url:"fullZoom.webp",revision:"5b7f25afa6c88802f876ff09a35a5740"},{url:"halfZoom.webp",revision:"67435cd8ea5825f8b22a2611ae636169"},{url:"home-128x128.jpg",revision:"6ca84f87af40bfb3cfc2a9fcef1a60ae"},{url:"home-128x128.svg",revision:"203b15537fb3f44f8e573884708f6b50"},{url:"index.html",revision:"14ce4e276d5135261bf0701e26201314"},{url:"manifest.webmanifest",revision:"4d73ce53dd2dfac1d922b931870309de"},{url:"mstile-150x150.png",revision:"d6e114ae73a0d02d01d698903c438d20"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"safari-pinned-tab.svg",revision:"10a73cf31dadcec56e8503d4e52e25b7"},{url:"site.webmanifest",revision:"c689a17f4ebdeb17410e164aba248b9b"},{url:"android-chrome-192x192.png",revision:"5ed7c88c5f9832975d2d712e3c3279aa"},{url:"android-chrome-512x512.png",revision:"503e15530e2e7ada29b13ba5b5c6bdf0"},{url:"apple-touch-icon.png",revision:"0dd06a2f7282f94dd15f88719dcd65aa"},{url:"browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"favicon-16x16.png",revision:"4b61f90fa202207450ae081e78dcc127"},{url:"favicon-32x32.png",revision:"ae96e1b49d6f7c017041e2123f71340f"},{url:"favicon.ico",revision:"6b58d536191d817fe0314ee80ec12abd"},{url:"fullZoom.webp",revision:"5b7f25afa6c88802f876ff09a35a5740"},{url:"halfZoom.webp",revision:"67435cd8ea5825f8b22a2611ae636169"},{url:"home-128x128.jpg",revision:"6ca84f87af40bfb3cfc2a9fcef1a60ae"},{url:"home-128x128.svg",revision:"203b15537fb3f44f8e573884708f6b50"},{url:"mstile-150x150.png",revision:"d6e114ae73a0d02d01d698903c438d20"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"safari-pinned-tab.svg",revision:"10a73cf31dadcec56e8503d4e52e25b7"},{url:"site.webmanifest",revision:"c689a17f4ebdeb17410e164aba248b9b"},{url:"480L_xcorners_float16/group1-shard10of21.bin",revision:"9b97f723f3e99c6cfb5d60602f8e035a"},{url:"480L_xcorners_float16/group1-shard11of21.bin",revision:"8506166c8552022ad6746fca23d1b445"},{url:"480L_xcorners_float16/group1-shard12of21.bin",revision:"454569a5ce5aef2f025ebcc3a8e3bec0"},{url:"480L_xcorners_float16/group1-shard13of21.bin",revision:"9287bf39f3a4758bde942f2f1f212c36"},{url:"480L_xcorners_float16/group1-shard14of21.bin",revision:"811c683859366222fd729e2ed9548507"},{url:"480L_xcorners_float16/group1-shard15of21.bin",revision:"09f1ed32823efde3aa9f860e1a19f453"},{url:"480L_xcorners_float16/group1-shard16of21.bin",revision:"96139ac8d1246d7eb2dea06a250013b3"},{url:"480L_xcorners_float16/group1-shard17of21.bin",revision:"aa32d273c65c90db6638877b9da73f5e"},{url:"480L_xcorners_float16/group1-shard18of21.bin",revision:"ee988a83883a33593bb9f86c423aa62b"},{url:"480L_xcorners_float16/group1-shard19of21.bin",revision:"495bb62f6240b6b322855bfc7a084c2b"},{url:"480L_xcorners_float16/group1-shard1of21.bin",revision:"dd9b143190b80b197663c53511dc08e4"},{url:"480L_xcorners_float16/group1-shard20of21.bin",revision:"7a08a5f1b7796c6a1909a3848af9498a"},{url:"480L_xcorners_float16/group1-shard21of21.bin",revision:"25b3c867ebe2edaea40cedb47bc7b685"},{url:"480L_xcorners_float16/group1-shard2of21.bin",revision:"47aab1cbb0f6c6b596674deb6286c788"},{url:"480L_xcorners_float16/group1-shard3of21.bin",revision:"8404f6e0fd154e0e6ae38b8f84c300ac"},{url:"480L_xcorners_float16/group1-shard4of21.bin",revision:"ec175e2ad4da59b27332976ef0a66174"},{url:"480L_xcorners_float16/group1-shard5of21.bin",revision:"a0389d5bc849af0e49f64bfce8e99f0b"},{url:"480L_xcorners_float16/group1-shard6of21.bin",revision:"b1a8ae678084f6fe755796547361b034"},{url:"480L_xcorners_float16/group1-shard7of21.bin",revision:"30bdd2c63b0bf1ddaad00ad8d9736072"},{url:"480L_xcorners_float16/group1-shard8of21.bin",revision:"b9b8998ebc4ad55436b16ddaf077bbf5"},{url:"480L_xcorners_float16/group1-shard9of21.bin",revision:"9851c1f6525f4c53d6e8e41b95f83a9e"},{url:"480L_xcorners_float16/model.json",revision:"e78f542a4031616671a329cb33c5f292"},{url:"480S_pieces_float16/group1-shard1of4.bin",revision:"44ebadf996a776c410ae3e13eb3422af"},{url:"480S_pieces_float16/group1-shard2of4.bin",revision:"94c2acaeebd6efad8e7dacf0b9f69486"},{url:"480S_pieces_float16/group1-shard3of4.bin",revision:"fa58561293f3c79fef8badc4c7320a19"},{url:"480S_pieces_float16/group1-shard4of4.bin",revision:"d9bc4e889a9a43c37ea2bb14f0a262b8"},{url:"480S_pieces_float16/model.json",revision:"066106905354ee8a67c90272d7c7d3e6"},{url:"manifest.webmanifest",revision:"4d73ce53dd2dfac1d922b931870309de"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
