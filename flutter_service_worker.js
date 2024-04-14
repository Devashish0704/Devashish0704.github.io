'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "030c6af722e5187679e13239d8e7e7ae",
".git/config": "7a4d90a8052fa205714118a9fd9b03fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1f69adaaef099a71b978976315b69f64",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "99b97e8471cd416a9907a5dd7aadf8e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74c3a9e940ac7608428fb223dc07b563",
".git/logs/refs/heads/main": "458adc13100b166cb6d65e1696ca1eac",
".git/logs/refs/remotes/origin/main": "082d575df7bb43740581b053dbb23cac",
".git/objects/01/a1fd1a3538d561b264a7f0bcad72c67f3630f8": "206ddbfacf20e1ec3b643f061280901b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/cd04360caae84e15c4d17c2c0d63e4eda7b09d": "252eec6c10ba4f9bcbf5f6d068d5b375",
".git/objects/09/037a2cd4c83d01fa8af4e1012496dd038410ef": "217aacd74bc95db553d092dbe00ce834",
".git/objects/09/744428ca14ea7c899f875c48c9afecd68b3c3c": "13c6e38da4e278643aba89df074184b0",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/2ec6ba2be57add458253071365b734613bc92f": "1403b3b6baac6ae2ab2b3444a013a2fe",
".git/objects/11/baace25575733f464e1c1c0a1384cf99bad2ae": "755ab59e9c4779c7181df33f058ddaf8",
".git/objects/1e/9a2bd42ed3aa2a45809a1341b32427bf608899": "b807683d051e9f03f83f51ed7195e8ce",
".git/objects/1e/d018e2fbbc5df8628eb7e8dbaffe2dfb41a35d": "c47d4a6fc5a4796d1141c217096f013f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/27473d4713be0f4e1318a7667b1dd364a27b76": "563e448f1e6dc3e630541a0b9f4dc38b",
".git/objects/25/b209cc67771ac4da5de68c29273d0d81f7a057": "948459d2195145822626c36c9cad8ae7",
".git/objects/27/0198a0252db2620815270d53cc97f3788ea783": "523cbb43cc6224826f0b231122d8e4de",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/31/77019fc18e2474f47c3f09bcab5656b2e5b520": "ab55167b5ea8755521c6aa06b9e4361e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/f7abef19558a3dce6752cb22654ae821490838": "4dd9cd40d3cd3534ef631a281de880e7",
".git/objects/3f/92e8c3750a3ee12d816783953b3efbc52c104d": "2b9adc1371366b70ccec3a50e1b4a5cd",
".git/objects/41/eb28d4d3709b9c79e19c94699ea69d332efacf": "32738cc5bef1fa3c27ceab4a6e9dd201",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/764dcaead41ce98e5b77f4adac5f3df780b90a": "a18c410e860b605945397a3bd3b96cc4",
".git/objects/45/88a20551dfbe7234c51cd0f1c4df381d4e7faf": "2f64c8ae2d5b707fb1b666c9aa2f017f",
".git/objects/47/bf06eaef5832ec14935af045eb1643dd928cc4": "8783670df7dc1f40e740a57c67d237a0",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/ed6597ec1367ce56db9ee2e3080cd937dc8c65": "724d0778cd99c36a9c2f170d6cc83acb",
".git/objects/4b/bbd73f24bc5b0f7a46b0dc23d1dfc263736de8": "45f7afd464fc02e29286a2159504da66",
".git/objects/4c/e2ccbdded5b287b18e8010f11c9c97c7931e98": "ed3b8b0dcfe0d3db82ffbe4b1af8790f",
".git/objects/4e/86739eec7498d40e04eb9db3326d129c5004ba": "6db900384635f15769377919f87976db",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/5b8c29bb841a530dce5afaedf8d8445b040491": "d47f92e153045edf0a365a205fc18188",
".git/objects/50/96fbe5b44814a952c8aeea55ceaf80f326eacf": "b534fe045e744779c98a509edd40f66c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/76b9ceb1f7435d34a02b659be57132994deeca": "d7cedb04c072c8ba9bca11e2d49ac7e8",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/b0fa457e41772b47fd1a3adf6c662ac402b44c": "5df98dbf4823e365d785d271f16d0b2a",
".git/objects/67/621ea999948f806d9452b3a5aa8048a25ffe18": "60038a1edad3d7d924db76b9b795f02b",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/7a/69342760fd2d3d311dc4d1df489448fa6bc649": "80ec127698c90421ff42df0f845ea9b6",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d581864a40e0872a1a43dfea69c6ea748cb713": "ce472166fdd681229b93c8707a70cabb",
".git/objects/8a/95bcdc9a370b11a9ca0f534e68572a79773be6": "7323a8c528ec6e73b5b565c6e5c9269c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/98a2a5243b12b595ef4ad31fac1d22454fab2b": "af41f75a4f1d8c777390e9c9169d3d2b",
".git/objects/8c/feb378c4f83bbbb841d47dee6893f352d4766f": "4684fd4e7ceded52fc63944c3b58c88f",
".git/objects/8d/e38ed3cd09c32e41def54a284d2a9a16dfe757": "5eadf54328005eee3d57cc4a8285759c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9f/710bb9e830159ca5633f401dcd2c9e4f85310e": "7e5b823e1b10c4e2587398a811967019",
".git/objects/a2/7447c951bfc4ce7c15eeaf442906a21a806e71": "3b1d80541f2a0badef9238d0ab853770",
".git/objects/a6/945088076f751cc96301ecf8fc5675b0e94315": "4f2fd9291c21b0f42d4580993d464bf6",
".git/objects/a8/39617787f29d7db00d8ad67a254d3c8e72658c": "8a649b044f6871676c48f6a3b0406b25",
".git/objects/a9/b484659fe40675c0abfbf6f68647a7b894c357": "e6cc69659ae16feddbc923ffc3be4875",
".git/objects/ab/fa540606d392b334a19d15b4d774d0aa63a82c": "2426de2df9c8134b11dbb8b2c7d527c9",
".git/objects/ad/59add49bffd6284e9b2c166d193c6fc042e51a": "5e9bbabc83c2008f35ec3edbac229089",
".git/objects/b4/6dc8e4b9b354527335ee362bd5602f6c3135e7": "b8af191cad1ce0ae830fb36afe254a8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c6/cd9c3a1c52e14a939fbd527953beae6dfa610c": "737b405ab87accaf85e885c45070e99f",
".git/objects/d2/1c74cde2f3a29951860437f2ac4717c386f018": "f094c319147ceac3f98ab6b4f0f61385",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a1c304bb630938286efeac2deebea4a30ddd55": "ecc6596a11a4ddfa958a3647badbd469",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/00aa3744e3d8377d0076cbbf2cd6432bb00f54": "32854f25e4bdcdd3762a0cb9ed8eecd8",
".git/objects/e9/5222fd57be617f12ae4b63b486b5ec66bb793b": "84b24ef7a9bd135b1154fa9f1017c94b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/d0ab95b78f87c6a2554135cc0e31fa49d3eddb": "2b63a723ae32fed8adb52301bc7c4ec4",
".git/objects/f7/ab7506df7b23b37905ce47e039f4055e787807": "651335d25407effb01b1ce8ba090b787",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fc/90732e8afc94c6ce8f39fc07609d4cac4a967f": "3322c4ccec433011c59dce22570b3ae6",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "d06c164ac9fe7a1f4119d83f3138cb9e",
".git/refs/heads/main": "725a6887fd0fe43c58eba420e50fc7dd",
".git/refs/remotes/origin/main": "d06c164ac9fe7a1f4119d83f3138cb9e",
"assets/AssetManifest.bin": "4f6fdcfe4907b8ccf4203a18e03660ec",
"assets/AssetManifest.bin.json": "63d08bca84a7890f24d9684cf28eb7a4",
"assets/AssetManifest.json": "c71cbb84522705a11b7fd3d01784eca9",
"assets/assets/icons/check.svg": "727f6270e3af2bb65d9e51c5f6c014aa",
"assets/assets/icons/github.svg": "4d7797cf01421eb8aa6243da7a2e48ca",
"assets/assets/icons/instagram.svg": "10896187c51bfcbfb162e08e8a856749",
"assets/assets/icons/linkedin.svg": "a4428357e7218a3ee6ebd38110443a6a",
"assets/assets/images/D_logo-removebg-preview.png": "897e30340655dab773092ec4277afe72",
"assets/assets/images/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/profile_pic.png": "ff2cba252adf87be2d78553dad5947af",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "805eea2e40d3e5033b2a9bf593adac62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "4cfeb9a0a893c16e4ef4594fe5c7df1a",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "5185053f724d3f631892c5fc61c84554",
"icons/android-chrome-512x512.png": "8846cfd86a7f7f421b61911eda4451b5",
"icons/apple-touch-icon.png": "c1ccf6d9dc1e48c1fe1ce94601909ba6",
"index.html": "6cb10fa61552e84d7a8b681c11a44958",
"/": "6cb10fa61552e84d7a8b681c11a44958",
"main.dart.js": "0047409c6b4d3966f64184d00a01c7ba",
"manifest.json": "2d4852864b6cbf0cd93f13a4caef48b1",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
