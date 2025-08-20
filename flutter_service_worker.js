'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ad828ac171f52dacdba8624c9b7d321d",
"index.html": "bfb226c9eb1bba544a77d0a2ff83bfd2",
"/": "bfb226c9eb1bba544a77d0a2ff83bfd2",
"main.dart.js": "d8218bf9a63839e4447c14aa223edf2a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "ecca5c87943609ac818de613f9d5e3f9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6981af59783b9816a39a3cab67741b65",
"assets/AssetManifest.json": "808a2191545d64c3692590eeaa5197f7",
"assets/NOTICES": "b3c85dda433515aa4c84fd1fff3db784",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c200ef108b77701f7c704e52dd177621",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/Assets/Diary_back.png": "5939792cd4920ceb0e91177cc53c77e0",
"assets/Assets/Achievements.png": "d226ed03faef605ebf9a35185c29ed61",
"assets/Assets/ebooks.png": "bd063892d5f24e46be047c0e23962442",
"assets/Assets/SendFeeRemainders.png": "a9fe2067e1661b3e4e5eea0206d3e05a",
"assets/Assets/Classes_icon.png": "b9c3fbb3b13da74b911fb592910dcd90",
"assets/Assets/stuperform.png": "c8f07fb5c74938b7a38c4336229502d5",
"assets/Assets/Inventory.png": "1b5870b5ed6f6613f9a828f5e29c1440",
"assets/Assets/Swecha-noback.png": "8658f11a18e158530f1734fc4b0412ec",
"assets/Assets/Exams_Icon.png": "b89caaa31cb2f03bf3fe82b69313c0a8",
"assets/Assets/ManageFee.png": "29f82e4e60febbc605c55f0150e19fbe",
"assets/Assets/Circulars_Icon.png": "413ebbb181d24a5b22fb827a6c0c8c9d",
"assets/Assets/E-diary_icon.png": "dba2709f8a54fbc4bd617bab3d593808",
"assets/Assets/classperform.png": "a99e12d408c0eb202e46d674eaa9de90",
"assets/Assets/Attendance.png": "b8f05807c4ce586e171787f10dd3507e",
"assets/Assets/Otppage.png": "f80413f4c4bbc617ee92a48d03a6e15c",
"assets/Assets/Fee_Icon.png": "c45a66466964646df7186d7ae61fc9bc",
"assets/Assets/Signupillus.png": "eee2eaa0c211b9b8c54543e380784edd",
"assets/Assets/Highschool.png": "3eafb2efe2387331656a2cb89ef69ec7",
"assets/Assets/Teachers_icon.png": "d5a24766434b81aabb4ad34eaf016dd7",
"assets/Assets/online_exams.png": "3a7610f1f7f5e187f1f6017551fdcaae",
"assets/Assets/student_attendence_logo.png": "8dc27319fad9d7b7897376ef0b36fb9a",
"assets/Assets/Academics.png": "0227db6277fbdf2ed095ba2a51b75ba0",
"assets/Assets/Diary.png": "eb6457eb1de87d920c10ac4ae31e7b02",
"assets/Assets/Events_icon.png": "b129f8c0e136ae3832d1cc2273419036",
"assets/Assets/student_scorecard_logo.png": "ef0e9c8cfef828316cd57687945b568d",
"assets/Assets/Primary.png": "068f7f4c1c92a9bec7cdca4493758488",
"assets/Assets/Upperprimary.png": "eb7f89fc97dae8fbbaa725313c02966a",
"assets/Assets/student_event_logo.png": "e2d463380badac39d672638e74c7fe2b",
"assets/Assets/student_fee_logo.png": "bb85b2bcec7e9a8967a8dc6a6a716556",
"assets/Assets/child2.png": "3eda6094013a3cd16e0d8f9daa9ea7d2",
"assets/Assets/child3.png": "96ff829345f24c7c4c69bb14c0d57941",
"assets/Assets/student_notification_logo.png": "8bf0cfa7507217c1a56bc30e445fd9ee",
"assets/Assets/student_chat_logo.png": "a60d7d73590b85c79765be9fd3660506",
"assets/Assets/child1.png": "a960702fa253b906e5e69944133d71eb",
"assets/Assets/fonts/Roboto-VariableFont_wdth,wght.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/Assets/admin.png": "6a20aa1d5dd3ce85376fabf4d2cd909f",
"assets/Assets/allexam.png": "902a9783f9f0c69cea00f99adb448b55",
"assets/Assets/Attendance_Icon.png": "abee81fa6b80089ce9c2c036ffdb86bb",
"assets/Assets/parent_background.png": "63bcc2da2421f6e864f130cedcb60dbd",
"assets/Assets/Admin_Background.png": "6ca2db08ef4db2f472269b3a35ed5926",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "9c7b8911f3d5ce2a08dab993f3e88ee6",
"canvaskit/chromium/canvaskit.js": "56facd8978a5292c9bb1d06dfcaee271",
"canvaskit/chromium/canvaskit.wasm": "29aa156140c5ee94f0550ee85921af84",
"canvaskit/canvaskit.js": "8c9ab94b3e7d4f85ca01c1b0a1e54bd1",
"canvaskit/canvaskit.wasm": "8fb70f708c246c7c0b2642f44ba6b402",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
