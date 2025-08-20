'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ad828ac171f52dacdba8624c9b7d321d",
"index.html": "74ae271bba628740de08e8b48a97d1c8",
"/": "74ae271bba628740de08e8b48a97d1c8",
"main.dart.js": "7903f65081558e9c8228c331ef3c4740",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "ecca5c87943609ac818de613f9d5e3f9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6981af59783b9816a39a3cab67741b65",
".git/config": "350414f6737fa4512bb3894ebfc17fcd",
".git/objects/61/211ceb7aeee4e9e31535fdd427fa2696a6d51d": "eeb76f4e013b2a7c14f84f507927652d",
".git/objects/3e/2dd60c7c0bfbb2312ef2145e2d6e958afff380": "0763a0015b0c61a3225f1d481df47199",
".git/objects/68/bb8e7a3c890def29aa23550fb70317408ddf15": "aabf3cdbdda644c28291f4fef675f219",
".git/objects/57/6e2de0ae9e94b1d66f0fad91f8efb04102ab67": "75449c50306bc39f7f3c7e4a3e3267f9",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9b/4fd3f4d6338df4ff93bbe2eb1c5fcf02ff2e7a": "1b45a153cadfed250e29781842c37b83",
".git/objects/04/6a79ce8f62cd7cc3621f8270f2146014ff7604": "309c2cd968ba124c5a8ad1e8900cd4e1",
".git/objects/32/4478359688bf964acfccc5d7b2e82dba6e6853": "cfdd54cd4bafce6dfde3a7484a535869",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/fa31cf56804bd73bd410151cc26bc966c87adc": "7c51aa8608dc6ca8926f14c5a06568ca",
".git/objects/51/9cfabd6a427c05ce8481f55a244f92aadbdbfb": "1911b426ac651b391b79f23599911af4",
".git/objects/51/bc0f952cb29af8534e1224e1d91dce41777e1e": "594673dfa4517c56ce82596179b70df2",
".git/objects/67/48750fe82edc109d7431d58116fbe3b77ad1f2": "272eb26890a28dd0ad46d075da78438e",
".git/objects/0b/9da6e7e29b5f133d9d13a5e228270c3163096d": "3a9295e0eb827fd057b373636f3e67a9",
".git/objects/94/ca9119a58ceaac39e77bf38b165acdcbdeac64": "efb0d5628112d97d0176625657c6b12b",
".git/objects/60/baa2332cfff2f7bc58c8816638783aa27d2f56": "0f0ceb22e447074ba04a56558ec34b8f",
".git/objects/5a/90901dfd19c6fd89337de27211c985b31b55a2": "62af21ff6ca2cceab4ac36054e0f3304",
".git/objects/5f/367b24518a4b73ab441d70c37e9ea5e0d561be": "d8bc996a5af50be12a22ecc51538a13d",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/05/ae48d478a24903dd079de124dbad0f8ce6fde7": "4a5f95b4cfc04a3ce69bbae038ee9b49",
".git/objects/02/a7d820ac0be183eb51bd095ffe645f7088dc5c": "413810075cfd6e3482802bc09b6aa1a5",
".git/objects/b5/9ac8ac9bd8edcf2e096eb02020fb559fd72646": "15b45e336688596295332814876e9d0f",
".git/objects/d9/87f8c0014669e32878b5c832298f7a7be2c750": "de902a7bf61249dc37d07741977eebac",
".git/objects/bb/a55f616c811c4ee31535667dd2ed30229e5e71": "87e8270b4443b55645967860cb2b8253",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/abb6c6f79732ddbc3324f15d300bcfe91cda4a": "d87af93cbcd70174d6576d603013a7d1",
".git/objects/d0/8f767aae843b4badd333ed37bd5eb5edf41f9d": "7c50e59d605d088d7125217a0deae8cb",
".git/objects/b4/41636206489d1acf165929340981c901f71d68": "10b9c7e61944623e0750b19e65152dcd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/6bec1b33c497c7fdd49e441902b998c963651a": "c4c6347c6867373361fac26a225f0c5a",
".git/objects/d8/cea7f4922980d51fa448b674c96605d9935eba": "ae07ce291087c7685cf8683303d16602",
".git/objects/ab/846473a04077a204c893e0af0e641d0d490db2": "f78c99002cbd6520a4af040fcc6f3172",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/2ae6566d70d581438efaf25af941c097c1be50": "64d329b0c4d72a3e8f4e6a31d8148869",
".git/objects/eb/574f78794b5a5bf4119a98f44ff83dd820e859": "a364cc9a2123610c0539a33ebb58c4c4",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ee/94628d018511ec4a5b4004ac29140d7deb1734": "4e628e3750ed54439ce978f441eec4ce",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/f2b0384b9181300fec0bed2c9797f7668f1438": "b54aa664c38c5c636277d03e4ff6c755",
".git/objects/c8/d62145fbcc3af5967411174c1e5c929dbf05c1": "05990901ad59fa1bb7be1470b2a86011",
".git/objects/fb/c80798981a67c88f2772fa7053c39abf9f3c93": "6bb712ce316468e2679c63f75caff5b0",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/16/f6bdcab173acdcc296b0b8fa9af584e2dfc4ab": "8698dc90841a3e690815db1240740afb",
".git/objects/42/b30c155074def50a12efc8bacbb93f1a158dc4": "0a14e83bb6e3043d07670a8bbb84e3e1",
".git/objects/89/f75e69350d78ed0f3f8dd6c8a9e91b875df84c": "ab50233647c0786f0477a29e46d93a6a",
".git/objects/89/58a34cc51cc06af30d73cf4146fec7692f1910": "950dff225d4b560bbc031358194b246b",
".git/objects/73/536598ff255014a9583585f834b31df86ced00": "bfbe76ce2ede1a40a69217c13922454c",
".git/objects/74/cec6d606b9bfbf172f5ea0a4e8254a97318dcd": "ea8e154483ba1a2a549f32d7f92abd93",
".git/objects/17/a6d2bf7b18547de40605756addd30cff809c45": "e605db65e499bf4d0c1ba97fa7d2e2ae",
".git/objects/17/970cdc84347278dfbf52d6451cc5f5c163d58e": "bdf44a3d11edea5475edc16af7e7f8e2",
".git/objects/8f/0de37ad41cd4a7c3ebacbae66ceb2da5291292": "42516f0a2c33a2129e8543c5426db8f4",
".git/objects/4c/c09bec3672876dbb21149650d8735a4b02b2b6": "7943e05d95bac4a5f58bc86bfc390f6f",
".git/objects/4c/39194b5ea2cf5ca10693f72fd30c42c582746e": "82aadcea2f1373d5d4aabea7fe44001c",
".git/objects/26/ade7ff71386d2d70c2634997eb575dc77bb301": "0ff42b9809417deac51bffd81ca6effb",
".git/objects/21/08a6895aa7cdc6ed20491647b92ef66437daab": "1f2ad3004ccccdf0b0ede9ef75b4be96",
".git/objects/81/010ce8d575d8d5c8efbf7904641717255c370a": "b8d5b9643c44454a0806b903b1833f9b",
".git/objects/72/78fa371284e726e588b24594d44de836c3d352": "7f07ff1bf9874e79a48b88ea88ceacad",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/811c2836b9207f40c34798a0597dd41a1602ac": "b3d4bcc7802d24a23ba037d3ef2513d5",
".git/objects/07/1d6a0a80cb309c34fc971865ec083d3a1d775c": "47068daf97adbcb2a1fb04ec5606ea07",
".git/objects/09/692ac9ee76a37a0ce6d5ce2fd0ee4d6a333daa": "55139e5a48b4c10518dfcc7d6081f6ee",
".git/objects/31/55a57a9ddd0cecd39301d8ae05a95a63724bf9": "138e171e1bcc349127dc6c2b033ce1b5",
".git/objects/91/76fe344653837ddb5c487d2e19778d7d137abf": "99709801d05ec48ad5aa0492a8d8265d",
".git/objects/62/7f8694dbb1e7ea5ac6b394b7723ebeb19580b1": "9ec79afde533fb8b679f07b203e68464",
".git/objects/3a/d314d0051a812952517ef551e184b9adf1940f": "3d5b10f45988cd326fd9c73d32f0e511",
".git/objects/54/4245531d78e0e509792f4e8c7ad28c7f780da9": "7d699fd660263d5b556a6baa1590a149",
".git/objects/53/ea5bd7096ff787f38e9e2b4fe0a674e0d0a8cd": "f0e26f2dd91aec4869bca3e3bf58235c",
".git/objects/30/001544e9e3958001689493fff9cdad522a1080": "d779790ecf52d1b0743b67bc8bdc4083",
".git/objects/5b/3236b954cddbd7e38c22b60b88f7ab40f584b6": "8398b470d7bc77c39452fd0d722132a5",
".git/objects/01/05dc3f17ee0635c0b00b8e0256b3b34daef601": "8615ee7aa726ef7dffd87707f421c844",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/1a440c6d3a949243d7401f76a24df36b3cf189": "8319b13c576658a668d7a18b3c0e32df",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/63/76785b5c19310624a08f411e9dae9181c51366": "1e0634f19b00c388f10e1646363e67e9",
".git/objects/0f/8517dadbadf73c3d4cefeb6b8974923ca2b195": "f48bb32b1dbd0c77d39f559bc27f0a75",
".git/objects/d3/236add66bb1fa0d1e728f9d73e88efe1768976": "d47036666d25337583d15e518df27b7b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/2fd82d61130691e4715f35ac461590768d56c6": "6a0d20e8b89f99c6078090201c0fceb2",
".git/objects/a7/00923b85276ea3a9adbed9106bafb099921b28": "80e8aae4d66350453b8f071c88755283",
".git/objects/b1/f0c46d04029589571627eaab3b910209faf086": "5c819b5d96b3dd34dd29f6a11cc0eed7",
".git/objects/dc/26a794928ce52fa05c7776c221e44136e1c3a1": "dd30e0c3d7714ddb4370545e93b91fa2",
".git/objects/b6/0b906525e7e9c178bedb594d004867e11d3bd4": "c4c7efac85a3ea825d6f57cbf4d01d35",
".git/objects/d5/4e891089fbb3fe4fcb8aaf68e38f5cd7baaaca": "8b2ffb830423c7479cc5f9e8d03ecef0",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/75cb7d2e158769753baf380c942b98826b6ac6": "7fd7ee3b6ed5f91928f30eba6b3bd7b4",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/9c4d65611534a5f0e799a2e0495e5a6f927fb0": "1a79ac1ac5998ce52ecf21f5f40ab15c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/9db7655b7d50418408b28411e3c15b07f65af7": "69e12728fb89dd84b1ca38380d243b50",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/a7a5fde14bf01a264c92705dc80f9b16046cee": "abdf213b153615e8f747eca10502715e",
".git/objects/e1/ae4dfac484aae407082b10350c51207a46cba5": "642a6ac79cd4c09a59eed19c6291bd52",
".git/objects/f7/e88cb8ed3ee8c2bf64c910e1947f0aa321f481": "bc77ddaf6613474a9977729edbb26e78",
".git/objects/e8/c7bb5dbd9e90cc7d519736097389d36b481e61": "9a17006f3844d246b2c113ac61ee919e",
".git/objects/fa/758752b0957b30564ff64ddc61bb6b8ec58561": "56867b501681a9353aac179cb4f727cc",
".git/objects/fa/6717635a8f573f3925d1ce5b5dad439d086c8a": "4fd9e631c8308b024d5bc36b8d11707f",
".git/objects/f6/bbd5235005e462c26ebdb79882b23a9a4c88aa": "a62072b7c439e6f5239cd1bfeea1cdab",
".git/objects/ce/358bd570533f289e9759cd96304a34d8c0d180": "7b30aac5149db9bd9a04e5caf5c08e1f",
".git/objects/ce/9dc1f40f5e6f62702fb8d0f4fdec5c17f4b8d7": "f9b2c1d3e5729c879bc48f15a8a20ecd",
".git/objects/e0/6393deb26e5c7f8b3a99d5e56d425c72af3351": "5d74ba33e31f4cb972799da141c54aaf",
".git/objects/e0/1319d29e3bed08a785b90db2eae1e902b68825": "e5b34737a9defcafec8c968be19db592",
".git/objects/46/1f0fc11babaa9137dbe4abc713a9cc9d3c31d3": "06618cd2d6234081b1e058f5afb039a2",
".git/objects/2c/cc97bb1b39d6b5381657ea49166afa936be6a9": "96f96f1eb663df5f749a77524deef40c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/98827c5175c848863ffc840395d0894185d6e4": "c5c338f5a919cff03f6fabd16d5d2fc6",
".git/objects/1e/b08780111834004fd2275a71be9d2a7fcb42f4": "c6dfccb3a6fe29f6be5dd062677afd89",
".git/objects/24/e12527e526f6f5346ae687dce461dbed8d6795": "191502476d55f3259020bd3d8fa34ce9",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/63584d92bc79c0ada602fd9b32b8c5a42d1665": "ef336345dc431fb4c2541a2d15c21aed",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/cede4984ba0385beaf1bea3619270beedf56f3": "0996ccdeb7b96b7f47b109061dbad5c2",
".git/objects/1d/83b33ae701bb4a3045b9dc6f521d9a60758e66": "0a719741ffe8c1128332440ae1f321f9",
".git/objects/82/572063b2665ead1dc950c0d9991c0ad43c022f": "1ac233568a0d964e191bf1d0f1df93cd",
".git/objects/49/eb1d7ae6e1e463a389d99741878702cce408a9": "bf672cdc07d42cdfc025ddbf319fcafa",
".git/objects/2b/e9abd05096e6d60d95602b75b6f155a8ab5241": "df48605ca84574c1ccf8a6ce70797485",
".git/objects/47/5f1816e46ce32e14d5c336cdbdd9d49b91a986": "c5cc76c9f551b009282f73e8fc155f50",
".git/objects/78/8550bf67fe59339a93aaf0ba0474009afd57ed": "bba5eb4cb8ddfcc746795c497fd8edd8",
".git/objects/8e/40fb4392280310417322cf3d9b370cc514af57": "984f0567c44111a0717b5966174976b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee836f64348024b25588ac095b5a850b",
".git/logs/refs/heads/main": "ee836f64348024b25588ac095b5a850b",
".git/logs/refs/remotes/origin/HEAD": "1374c026d4cc61293494d30f2df0d1b5",
".git/logs/refs/remotes/origin/main": "5a3c615b3139d3e9712097e39c022acc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9e251b4187031ed1f09c9513c0df4ac6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9e251b4187031ed1f09c9513c0df4ac6",
".git/index": "4dff580da3ddf8440507efe114d16c7c",
".git/COMMIT_EDITMSG": "9f6787648476b26f8bc72d98904b50e7",
".git/FETCH_HEAD": "433f26506237dff69ab2c805e1de8e95",
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
