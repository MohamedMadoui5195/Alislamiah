const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js'
  // أضف أي ملفات أخرى تريد تخزينها هنا
];

// 1. تثبيت Service Worker وتخزين الملفات محلياً
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. اعتراض طلبات الشبكة وخدمتها من التخزين المؤقت عند انقطاع الإنترنت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // إرجاع الملف المخزن إذا وجد، وإلا جلبه من الشبكة
      return response || fetch(event.request);
    })
  );
});

// 3. تحديث التخزين المؤقت وحذف النسخ القديمة
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
