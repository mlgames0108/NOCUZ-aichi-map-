(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.MapCore=api})(typeof window==='object'?window:globalThis,function(){
 'use strict';
 const enc=encodeURIComponent;
 function pointFor(p,signal){if(signal?.aborted)throw new DOMException('Aborted','AbortError');if(!p||!Number.isFinite(p.lat)||!Number.isFinite(p.lon)||p.lat<24||p.lat>46||p.lon<122||p.lon>146.5)throw Error('Missing location');return {lat:p.lat,lon:p.lon}}
 function pair(p){const g=pointFor(p);return g.lat+','+g.lon}
 function googlePlace(p){return 'https://www.google.com/maps/search/?api=1&query='+enc(pair(p))}
 function googleRoute(a,b,via){return 'https://www.google.com/maps/dir/?api=1&origin='+enc(pair(a))+'&destination='+enc(pair(b))+(via?'&waypoints='+enc(pair(via)):'')+'&travelmode=driving'}
 function appleRoute(a,b){return 'https://maps.apple.com/?saddr='+enc(pair(a))+'&daddr='+enc(pair(b))+'&dirflg=d'}
 function metres(a,b){const rad=Math.PI/180,lat=(b.lat-a.lat)*rad,lon=(b.lon-a.lon)*rad;const h=Math.sin(lat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(lon/2)**2;return 6371008.8*2*Math.atan2(Math.sqrt(Math.min(1,h)),Math.sqrt(Math.max(0,1-h)))}
 function validateRoute(d,a,b){
  pointFor(a);pointFor(b);const r=d?.routes?.[0];
  if(d?.code!=='Ok'||!r||!Number.isFinite(r.distance)||r.distance<0||!Number.isFinite(r.duration)||r.duration<0||r.geometry?.type!=='LineString'||!Array.isArray(r.geometry.coordinates)||r.geometry.coordinates.length<2)throw Error('Invalid road response');
  const geometry=r.geometry.coordinates.map(c=>{if(!Array.isArray(c)||c.length<2)throw Error('Invalid geometry');return pointFor({lon:c[0],lat:c[1]})});
  const startGap=metres(a,geometry[0]),endGap=metres(b,geometry.at(-1));
  // A road-access gap never moves the actual venue marker. The UI displays this gap.
  // Large campuses, ports and stadium grounds can sit away from the nearest drivable road.
  // Keep the exact marker and show the approach gap in the route card instead of rejecting it.
  if(startGap>10000||endGap>10000)throw Error('Road too far from location');
  if(r.distance+200<metres(geometry[0],geometry.at(-1)))throw Error('Impossible route length');
  return {km:r.distance/1000,min:r.duration/60,geometry,startGap,endGap};
 }
 return Object.freeze({pointFor,googlePlace,googleRoute,appleRoute,metres,validateRoute});
});
