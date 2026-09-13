const SHELL='ain26-v12-shell-1';
const APP=['./','./index.html','./app.js','./places.js','./map-core.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./vendor/maplibre-gl.js','./vendor/maplibre-gl.css','./map-style.js','./coordinate-audit.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(SHELL).then(c=>c.addAll(APP)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>/^ain26-v\d+-shell-/.test(k)&&k!==SHELL).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
 // Revalidate pages; cache only this app's shell. Never return HTML for a script.
 e.respondWith(caches.open(SHELL).then(async c=>{
  if(r.mode==='navigate'){try{const response=await fetch(r);if(response.ok)return response;return await c.match(r)||response}catch(err){return await c.match(r)||await c.match('./index.html')||Response.error()}}
  return await c.match(r)||fetch(r);
 }));
});




