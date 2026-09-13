(function(){'use strict';
const places = window.AIN_PLACES;
const routes = [
  {from:'cruise',to:'okazaki_square',km:47,min:42,sport:'Стрельба из лука'},
  {from:'cruise',to:'kinjo_square',km:0.6,min:5,sport:'Баскетбол 3x3 (жен.)'},
  {from:'cruise',to:'miyoshi_lake',km:30,min:39,sport:'Байдарка и каноэ'},
  {from:'cruise',to:'inae',km:6.4,min:14,sport:'MMA / спортивная борьба'},
  {from:'cruise',to:'rainbow_hall',km:14.1,min:24,sport:'Спортивная / художественная гимнастика'},
  {from:'cruise',to:'aichi_arena',km:27.9,min:29,sport:'Дзюдо'},
  {from:'cruise',to:'mizuho_rugby',km:26.3,min:30,sport:'Регби (муж.)'},
  {from:'cruise',to:'skyhall',km:45.9,min:44,sport:'Настольный теннис'},
  {from:'cruise',to:'trade_center',km:24.1,min:25,sport:'Тяжёлая атлетика'},
  {from:'cruise',to:'martial_arts',km:48.4,min:48,sport:'Ушу'},
  {from:'cruise',to:'kinjo_arena',km:0.7,min:7,sport:'Сквош'},
  {from:'villas',to:'martial_arts',km:42.6,min:48,sport:'Джиу-джитсу / кураш'},
  {from:'villas',to:'mizuho_rugby',km:10.1,min:23,sport:'Футбол (жен.)'},
  {from:'ana',to:'mizuho_rugby',km:7.4,min:22,sport:'Футбол (муж.)'},
  {from:'greenrich',to:'kasugai_golf',km:41.4,min:40,sport:'Гольф'},
  {from:'strings',to:'rainbow_pool',km:15.9,min:22,sport:'Водное поло (жен.)'},
  {from:'strings',to:'higashiyama_tennis',km:11.5,min:21,sport:'Теннис'},
  {from:'meitetsu',to:'okazaki_gym',km:54.3,min:57,sport:'Волейбол (муж.)'},
  {from:'meitetsu',to:'park_komaki',km:23.8,min:34,sport:'Волейбол (муж.)'},
  {from:'toyoko2',to:'mizuho_athletic',km:39.4,min:40,sport:'Лёгкая атлетика'},
  {from:'toyoko2',to:'racewalk',km:46.6,min:42,sport:'Спортивная ходьба'},
  {from:'toyoko1',to:'skyexpo',km:0.9,min:6,sport:'Киберспорт'},
  {from:'centrair',to:'hekinan',km:22,min:27,sport:'Пляжный волейбол (муж.)'},
  {from:'fourpoints',to:'skyexpo',km:0.65,min:4,sport:'Фехтование'},
  {from:'meizanso',to:'nishio',km:22.5,min:37,sport:'Бокс'},
  {from:'route_shinshiro',to:'shinshiro_course',km:76.4,min:69,sport:'Шоссейный велоспорт'},
  {from:'henna',to:'kaiyoh',km:0.1,min:2,sport:'Парусный спорт'},
  {from:'loisir',to:'toyohashi_gym',km:6.1,min:16,sport:'Каратэ / тхэквондо'},
  {from:'takeshima',to:'gamagori_tri',km:1.2,min:2,sport:'Триатлон'},
  {from:'toyota_union',to:'yahagi_slalom',km:19,min:30,sport:'Каноэ-слалом'},
  {from:'meitetsu_toyota',to:'anjo_sports',km:15.9,min:40,sport:'Современное пятиборье'},
  {from:'grand_tiara',to:'shooting',km:51.3,min:65,sport:'Стрельба'},
  {from:'toyoko_mikawa',to:'shooting',km:51.3,min:65,sport:'Стрельба'},
  {from:'grantia_komaki',to:'kasugai_gym',km:6.7,min:19,sport:'Гандбол (жен.)'},
  {from:'grantia_komaki',to:'entrio',km:9.7,min:24,sport:'Гандбол (жен.)'},
  {from:'miyako_gifu',to:'gifu_nagaragawa_stadium',km:0.31,min:1,sport:'Футбол (жен.)'},
  {from:'ogaki_forum',to:'gifu_green_stadium',km:22.7,min:21,sport:'Хоккей на траве (жен.)'},
  {from:'gifu_grand',to:'gifu_green_stadium',km:15.9,min:16,sport:'Хоккей на траве (муж.)'}
];
const staySports=Object.fromEntries(staysFromRoutes());
function staysFromRoutes(){const out={};for(const r of routes){const list=out[r.from]||(out[r.from]=[]);if(!list.includes(r.sport))list.push(r.sport)}return Object.entries(out)}
const sportEn={"Стрельба из лука": "Archery", "Баскетбол 3x3": "3x3 Basketball", "Байдарка и каноэ": "Canoe / Kayak", "MMA / спортивная борьба": "MMA / Wrestling", "Спортивная / художественная гимнастика": "Artistic / Rhythmic Gymnastics", "Дзюдо": "Judo", "Регби / футбол": "Rugby / Football", "Настольный теннис": "Table Tennis", "Тяжёлая атлетика": "Weightlifting", "Ушу / джиу-джитсу / кураш": "Wushu / Jiu-jitsu / Kurash", "Сквош": "Squash", "Гольф": "Golf", "Водное поло": "Water Polo", "Теннис": "Tennis", "Волейбол": "Volleyball", "Лёгкая атлетика": "Athletics", "Спортивная ходьба": "Race Walking", "Киберспорт / фехтование": "Esports / Fencing", "Пляжный волейбол": "Beach Volleyball", "Бокс": "Boxing", "Шоссейный велоспорт": "Road Cycling", "Парусный спорт": "Sailing", "Каратэ / тхэквондо": "Karate / Taekwondo", "Триатлон": "Triathlon", "Каноэ-слалом": "Canoe Slalom", "Современное пятиборье": "Modern Pentathlon", "Стрельба": "Shooting", "Гандбол": "Handball", "Баскетбол 3x3 (жен.)": "3x3 Basketball (Women)", "Регби (муж.)": "Rugby (Men)", "Футбол (жен.)": "Football (Women)", "Футбол (муж.)": "Football (Men)", "Водное поло (жен.)": "Water Polo (Women)", "Волейбол (муж.)": "Volleyball (Men)", "Пляжный волейбол (муж.)": "Beach Volleyball (Men)", "Гандбол (жен.)": "Handball (Women)", "Киберспорт": "Esports", "Фехтование": "Fencing", "Ушу": "Wushu", "Джиу-джитсу / кураш": "Jiu-jitsu / Kurash"};
Object.assign(sportEn,{'Академическая гребля':'Rowing','Футбол':'Football','Хоккей на траве':'Field Hockey','Хоккей на траве (жен.)':'Field Hockey (Women)','Хоккей на траве (муж.)':'Field Hockey (Men)'});
const cityRu={"Nagoya": "Нагоя", "Tokoname": "Токонамэ", "Gamagori": "Гамагори", "Shinshiro": "Синсиро", "Toyohashi": "Тоёхаси", "Toyota": "Тоёта", "Anjo": "Андзё", "Komaki": "Комаки", "Okazaki": "Окадзаки", "Miyoshi": "Миёси", "Kasugai": "Касугай", "Hekinan": "Хэкинан", "Nishio": "Нисио", "Inazawa": "Инадзава", "Aisai": "Айсаи", "Kariya": "Кария", "Gifu": "Гифу", "Ogaki": "Огаки", "Kakamigahara": "Какамигахара"};
const sportUzCyr={
 'Стрельба из лука':'Камондан отиш','Баскетбол 3x3 (жен.)':'Баскетбол 3х3 (аёллар)','Баскетбол 3x3':'Баскетбол 3х3',
 'Байдарка и каноэ':'Байдарка ва каноэда эшкак эшиш','MMA / спортивная борьба':'ММА / спорт курашлари','Спортивная / художественная гимнастика':'Спорт / бадиий гимнастика',
 'Дзюдо':'Дзюдо','Регби (муж.)':'Регби (эркаклар)','Регби / футбол':'Регби / футбол','Настольный теннис':'Стол теннис','Тяжёлая атлетика':'Оғир атлетика',
 'Ушу':'Ушу','Ушу / джиу-джитсу / кураш':'Ушу / джиу-житсу / кураш','Джиу-джитсу / кураш':'Жиу-житсу / кураш','Сквош':'Сквош','Гольф':'Гольф',
 'Водное поло (жен.)':'Сув полоси (аёллар)','Водное поло':'Сув полоси','Теннис':'Теннис','Волейбол (муж.)':'Волейбол (эркаклар)','Волейбол':'Волейбол',
 'Лёгкая атлетика':'Енгил атлетика','Спортивная ходьба':'Спорт юриши','Киберспорт':'Е-спорт','Киберспорт / фехтование':'Е-спорт / қиличбозлик',
 'Пляжный волейбол (муж.)':'Соҳил волейболи (эркаклар)','Пляжный волейбол':'Соҳил волейболи','Фехтование':'Қиличбозлик','Бокс':'Бокс',
 'Шоссейный велоспорт':'Велошоссе','Парусный спорт':'Елканли спорт','Каратэ / тхэквондо':'Каратэ / таэквондо','Триатлон':'Триатлон','Каноэ-слалом':'Слаломда эшкак эшиш',
 'Современное пятиборье':'Замонавий бешкураш','Стрельба':'Ўқ отиш','Гандбол (жен.)':'Гандбол (аёллар)','Гандбол':'Гандбол','Академическая гребля':'Академик эшкак эшиш',
 'Футбол (жен.)':'Футбол (аёллар)','Футбол (муж.)':'Футбол (эркаклар)','Футбол':'Футбол','Хоккей на траве':'Чим устида хоккей','Хоккей на траве (жен.)':'Чим устида хоккей (аёллар)','Хоккей на траве (муж.)':'Чим устида хоккей (эркаклар)'
};
const cityUzCyr={Nagoya:'Нагоя',Tokoname:'Токонамэ',Gamagori:'Гамагори',Shinshiro:'Синсиро',Toyohashi:'Тоёхаси',Toyota:'Тойота',Anjo:'Анжо',Komaki:'Комаки',Okazaki:'Окадзаки',Miyoshi:'Миёси',Kasugai:'Касугай',Hekinan:'Хэкинан',Nishio:'Нисио',Inazawa:'Инадзава',Aisai:'Айсай',Kariya:'Кария',Gifu:'Гифу',Ogaki:'Огаки',Kakamigahara:'Какамигахара'};
const uzLatinMap={'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Е':'E','е':'e','Ё':'Yo','ё':'yo','Ж':'J','ж':'j','З':'Z','з':'z','И':'I','и':'i','Й':'Y','й':'y','К':'K','к':'k','Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','У':'U','у':'u','Ф':'F','ф':'f','Х':'X','х':'x','Ц':'Ts','ц':'ts','Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Shch','щ':'shch','Ъ':'','ъ':'','Ы':'Y','ы':'y','Ь':'','ь':'','Э':'E','э':'e','Ю':'Yu','ю':'yu','Я':'Ya','я':'ya','Ў':'Oʻ','ў':'oʻ','Қ':'Q','қ':'q','Ғ':'Gʻ','ғ':'gʻ','Ҳ':'H','ҳ':'h'};
function uzLatin(value){return String(value??'').replace(/[А-Яа-яЁёЎўҚқҒғҲҳЪъЫыЬьЭэЮюЯя]/g,ch=>uzLatinMap[ch]??ch)}
const T={
ru:{subtitle:'НОК Узбекистана | Департамент международных связей и протокола',search:'Найти объект, отель или вид спорта…',checking:'Проверка подключения…',online:'Онлайн',offline:'Офлайн • места и расстояния сохранены',source:'данные делегации • 04.09.2026',mapTitle:'Карта Нагои, Аичи и Гифу',map:'Карта',sat:'Спутник',stay:'Проживание',venue:'Объект',mapBadge:'English labels · OpenFreeMap',mapRoute:'Маршрут на карте',origin:'Проживание',destination:'Объект соревнований',showRoute:'Показать маршрут',planner:'Планировщик маршрута',delegation:'Данные делегации',live:'Онлайн-оценка дороги',livePrompt:'Нажмите «Обновить онлайн»',liveRefresh:'Обновить онлайн',onMap:'На карте',note:'Расстояние и время делегации взяты из файла размещения. Онлайн-оценка строится по дорожной сети и может отличаться от данных делегации.',quick:'Быстрые маршруты',all:'Все',stays:'Проживание',venues:'Объекты',fav:'★ Избранное',places:'Точки',sources:'Источники данных',data:'Размещение и расстояния: «0.6. Яшаш жойлари (04.09.2026)». Названия/адреса объектов: «20th Asian Games Aichi-Nagoya 2026 ACR Facilities Guide», Ver.3.0, September 2026.',internet:'Карта, геокодирование и онлайн-маршрут требуют интернета. Список точек, избранное и расстояния делегации работают без него.',stayCount:'мест проживания',venueCount:'объектов соревнований',routeCount:'подтверждённых маршрутов',lang:'полный двуязычный интерфейс',navMap:'Карта',navRoute:'Маршрут',navPlaces:'Точки',points:n=>n+' точек',nothing:'Ничего не найдено',open:'Google',mapPlace:'На карту',showAll:'Показать все объекты',staySportsLabel:'Виды спорта',delegationData:(km,min)=>km+' км • '+min+' мин',fromTable:'из таблицы размещения делегации',loading:'Загрузка точек…',geocodeFail:'Не удалось определить точку внутри карты. Откройте её в Google Maps.',tilesFail:'Карта не загрузилась. Проверьте интернет и откройте файл в браузере. Список мест и Google Maps доступны ниже.',liveLoading:'Расчёт дорожного маршрута…',liveFail:'Онлайн-маршрут сейчас недоступен. Данные делегации сохранены.',liveValue:(km,min)=>km+' км • ~'+min+' мин',favAdded:'Добавлено в избранное',favRemoved:'Удалено из избранного',routeReady:'Маршрут показан на карте',modeMap:'Карта',modeSat:'Спутник',install:'Установить',installed:'Установлено',iosInstall:'Чтобы установить на iPhone: откройте сайт в Safari → Поделиться → «На экран Домой».',share:'Поделиться маршрутом',shareTitle:'Маршрут Aichi–Nagoya 2026',shareFail:'Ссылка на маршрут готова',city:(c)=>cityRu[c]||c},
en:{subtitle:'NOC Uzbekistan | Department of International Relations and Protocol',search:'Search hotel, venue or sport…',checking:'Checking connection…',online:'Online',offline:'Offline • delegation list and data available',source:'delegation data • 04 Sep 2026',mapTitle:'Nagoya, Aichi & Gifu map',map:'Map',sat:'Satellite',stay:'Accommodation',venue:'Venue',mapBadge:'English labels · OpenFreeMap',mapRoute:'Route on map',origin:'Accommodation',destination:'Competition venue',showRoute:'Show route',planner:'Route planner',delegation:'Delegation data',live:'Online road estimate',livePrompt:'Tap “Refresh online”',liveRefresh:'Refresh online',onMap:'Show on map',note:'Delegation distance/time comes from the accommodation file. Online estimate follows the road network and may differ.',quick:'Quick routes',all:'All',stays:'Accommodation',venues:'Venues',fav:'★ Favorites',places:'Places',sources:'Data sources',data:'Accommodation and route distances: “0.6. Яшаш жойлари (04.09.2026)”. Venue names/addresses: “20th Asian Games Aichi-Nagoya 2026 ACR Facilities Guide”, Ver.3.0, September 2026.',internet:'Map, geocoding and online routing require internet. Place list, favorites and delegation route data work offline.',stayCount:'accommodation locations',venueCount:'competition venues',routeCount:'confirmed routes',lang:'full bilingual interface',navMap:'Map',navRoute:'Route',navPlaces:'Places',points:n=>n+' places',nothing:'Nothing found',open:'Google',mapPlace:'Map',showAll:'Show all objects',staySportsLabel:'Sports',delegationData:(km,min)=>km+' km • '+min+' min',fromTable:'from the delegation accommodation table',loading:'Loading points…',geocodeFail:'Could not resolve this point inside the map. Open it in Google Maps instead.',tilesFail:'Map unavailable. Check your connection and open the file in a browser. The place list and Google Maps links remain available.',liveLoading:'Calculating road route…',liveFail:'Online routing is unavailable right now. Delegation data is still available.',liveValue:(km,min)=>km+' km • ~'+min+' min',favAdded:'Added to favorites',favRemoved:'Removed from favorites',routeReady:'Route shown on map',modeMap:'Map',modeSat:'Satellite',install:'Install',installed:'Installed',iosInstall:'To install on iPhone: open this site in Safari → Share → Add to Home Screen.',share:'Share route',shareTitle:'Aichi–Nagoya 2026 route',shareFail:'Route link is ready',city:(c)=>c}
};
const byId=Object.fromEntries(places.map(p=>[p.id,p]));
const USER_LOCATION_ID='user_location';
const usedPlaces=places;
byId.mizuho_athletic.ceremony=true;
const stays=usedPlaces.filter(p=>p.kind==='stay'); const venues=usedPlaces.filter(p=>p.kind==='venue'); const specials=usedPlaces.filter(p=>p.kind==='special');
let state={theme:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light',lang:'ru',filter:'all',screen:'map',origin:routes[0].from,dest:routes[0].to,mapMode:'map',favorites:new Set(),recent:[]};
try{const s=JSON.parse(localStorage.getItem('ain26_state')||'{}');if(['ru','en','uzc','uzl'].includes(s.lang))state.lang=s.lang;if(s.origin&&byId[s.origin])state.origin=s.origin;if(s.dest&&byId[s.dest])state.dest=s.dest;if(['map','sat'].includes(s.mapMode))state.mapMode=s.mapMode;if(['light','dark'].includes(s.theme))state.theme=s.theme;if(Array.isArray(s.favorites))state.favorites=new Set(s.favorites.filter(id=>byId[id]));if(Array.isArray(s.recent))state.recent=s.recent.filter(k=>typeof k==='string'&&k.split('|').length===2&&k.split('|').every(id=>byId[id])).slice(0,6)}catch(e){}
const $=id=>document.getElementById(id); const tr=()=>T[state.lang];
const uiText=(ru,en,uzc,uzl)=>state.lang==='ru'?ru:state.lang==='en'?en:state.lang==='uzc'?(uzc??ru):(uzl??en);
function save(){try{localStorage.setItem('ain26_state',JSON.stringify({theme:state.theme,lang:state.lang,origin:state.origin,dest:state.dest,mapMode:state.mapMode,favorites:[...state.favorites],recent:state.recent}))}catch(e){}}
function enc(s){return encodeURIComponent(s)}
function googleRoute(a,b){return MapCore.googleRoute(a,b)}
function appleRoute(a,b){return MapCore.appleRoute(a,b)}
function googlePlace(p){return MapCore.googlePlace(p)}
function sportText(s){if(state.lang==='en')return sportEn[s]||s;if(state.lang==='uzc')return sportUzCyr[s]||s;if(state.lang==='uzl')return uzLatin(sportUzCyr[s]||s);return s}
function cityText(c){if(state.lang==='en')return c;if(state.lang==='uzc')return cityUzCyr[c]||c;if(state.lang==='uzl')return uzLatin(cityUzCyr[c]||c);return cityRu[c]||c}
function sportIcon(s=''){
 const x=String(s).toLowerCase();
 if(x.includes('лук')||x.includes('arch'))return '🏹';
 if(x.includes('стрельб')||x.includes('shoot'))return '🎯';
 if(x.includes('баскет')||x.includes('basket'))return '🏀';
 if(x.includes('волейбол')||x.includes('volley'))return '🏐';
 if(x.includes('байдар')||x.includes('каноэ')||x.includes('греб')||x.includes('canoe')||x.includes('row'))return '🚣';
 if(x.includes('регби')||x.includes('rugby'))return '🏉';
 if(x.includes('футбол')||x.includes('football'))return '⚽';
 if(x.includes('гимнаст')||x.includes('gymnast'))return '🤸';
 if(x.includes('дзюдо')||x.includes('ушу')||x.includes('борьб')||x.includes('жиу')||x.includes('кураш')||x.includes('каратэ')||x.includes('тхэк'))return '🥋';
 if(x.includes('теннис')||x.includes('squash')||x.includes('сквош'))return '🎾';
 if(x.includes('гольф')||x.includes('golf'))return '⛳';
 if(x.includes('тяжёл')||x.includes('weight'))return '🏋️';
 if(x.includes('гандбол')||x.includes('handball'))return '🤾';
 if(x.includes('водн')||x.includes('плаван')||x.includes('water')||x.includes('swim'))return '🏊';
 if(x.includes('легк')||x.includes('лёгк')||x.includes('athlet')||x.includes('ходьб')||x.includes('walk'))return '🏃';
 if(x.includes('кибер')||x.includes('esport'))return '🎮';
 if(x.includes('фехт')||x.includes('fenc'))return '🤺';
 if(x.includes('бокс')||x.includes('box'))return '🥊';
 if(x.includes('вел')||x.includes('cycl'))return '🚴';
 if(x.includes('парус')||x.includes('sail'))return '⛵';
 if(x.includes('триат')||x.includes('triath'))return '🏊';
 if(x.includes('пятибор')||x.includes('pentath'))return '🏅';
 if(x.includes('хоккей')||x.includes('hockey'))return '🏑';
 return '🏅';
}
function markerLabel(p){if(p.markerLabel)return p.markerLabel;if(p.kind==='stay')return 'H';if(p.kind==='special')return 'HQ';return sportIcon(p.sport)}
function compactSport(s){return String(s).replace(/\s*\/\s*/g,'/').replace(/\s*\((жен\.|муж\.)\)/g,m=>m.replace('жен.','ж.').replace('муж.','м.'))}
function sportSummary(list,max=3){const a=list.map(compactSport);return a.length>max?a.slice(0,max).join(', ')+' +'+(a.length-max):a.join(', ')}
function placeType(p){if(p.role==='ou')return state.lang==='ru'?'Руководство':state.lang==='uzc'?'Раҳбарият':state.lang==='uzl'?'Rahbariyat':'Leadership';if(p.role==='oca')return 'OCA HQ';return p.kind==='stay'?tr().stay:tr().venue+(p.sport?' • '+sportText(p.sport):'')}
function currentRoute(){return routes.find(r=>r.from===state.origin&&r.to===state.dest)||null}
function toast(msg){const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1800)}
function routeLabel(r){return sportText(r.sport)}
function validRoutesFrom(id){return routes.filter(r=>r.from===id)}

 function setLanguage(lang){state.lang=lang;document.documentElement.lang=lang==='uzc'?'uz-Cyrl':lang==='uzl'?'uz-Latn':lang;$('ruBtn').classList.toggle('active',lang==='ru');$('enBtn').classList.toggle('active',lang==='en');$('uzcBtn').classList.toggle('active',lang==='uzc');$('uzlBtn').classList.toggle('active',lang==='uzl');const x=tr();$('subtitle').textContent=x.subtitle;$('search').placeholder=x.search;$('sourceShort').textContent=x.source;$('mapTitle').textContent=x.mapTitle;$('mapDistanceLabel').textContent=x.mapDistanceLabel;$('mapTimeLabel').textContent=x.mapTimeLabel;$('sportPanelTitle').textContent=x.sportPanel;$('mapDetourTitle').textContent=x.mapDetours;$('mapDetourRadius').textContent=x.mapDetourRadius;$('mapMode').textContent=x.map;$('satMode').textContent=x.sat;$('lgStay').textContent=x.stay;$('lgVenue').textContent=x.venue;$('mapBadge').textContent=x.mapBadge;$('showAllMap').textContent=x.showAll;$('enableLocation').textContent=x.locationEnable||(state.lang==='en'?'Enable location':state.lang==='uzc'?'Геопозицияни ёқиш':state.lang==='uzl'?'Geolokatsiyani yoqish':'Включить геопозицию');$('routeFromLocation').textContent=x.routeFromLocation||(state.lang==='en'?'Build route from my location':state.lang==='uzc'?'Геопозициямдан маршрут қуриш':state.lang==='uzl'?'Geolokatsiyamdan marshrut qurish':'Построить маршрут от моей геопозиции');$('mapRouteHead').textContent=x.mapRoute;$('originLabel').textContent=x.origin;$('destLabel').textContent=x.destination;$('drawRoute').textContent=x.showRoute;$('routeHead').textContent=x.planner;$('originLabel2').textContent=x.origin;$('destLabel2').textContent=x.destination;$('delegationTitle').textContent=x.delegation;$('liveTitle').textContent=x.live;$('liveRoute').textContent=x.liveRefresh;$('showOnMap').textContent=x.onMap;$('routeNote').textContent=x.note;$('recentHead').textContent=x.quick;$('allChip').textContent=x.all;$('stayChip').textContent=x.stays;$('venueChip').textContent=x.venues;$('favChip').textContent=x.fav;$('placesHead').textContent=x.places;$('dataHead').textContent=x.sources;$('dataText').textContent=x.data;$('internetText').textContent=x.internet;$('stayCountLabel').textContent=x.stayCount;$('venueCountLabel').textContent=x.venueCount;$('routeCountLabel').textContent=x.routeCount;$('langLabel').textContent=x.lang;$('navMap').textContent=x.navMap;$('navRoute').textContent=x.navRoute;$('navPlaces').textContent=x.navPlaces;$('installBtn').textContent=x.install;$('shareRoute').textContent=x.share;$('mapFindDetours').textContent=x.findDetours;if($('originSearch'))$('originSearch').placeholder=x.routeSearch||'Найти объект…';if($('destinationSearch'))$('destinationSearch').placeholder=x.routeSearch||'Найти объект…';$('locateMe').setAttribute('aria-label',x.locationButton);$('locateMe').title=x.locationButton;$('sportPanelCount').textContent=routes.length+' '+(state.lang==='ru'?'маршрутов':state.lang==='uzc'?'йўналиш':state.lang==='uzl'?'yo‘nalish':'routes');networkUpdate();updateRouteUI();renderPlaces();map.setMode(state.mapMode);updateThemeUI();renderSportList();updateLocationStatus();save()}
function networkUpdate(){const on=navigator.onLine;$('statusDot').className='statusdot '+(on?'online':'offline');$('networkText').textContent=on?tr().online:tr().offline}

function staySportsFor(p){return p.kind==='stay'?(staySports[p.id]||[]):[]}
function renderPlaces(){
 const q=$('search').value.trim().toLowerCase();
 const data=usedPlaces.filter(p=>{
  if(state.filter==='fav')return state.favorites.has(p.id);
  if(state.filter==='stay')return p.kind==='stay';
  if(state.filter==='venue')return p.kind==='venue';
  return true;
 }).filter(p=>{
  const assigned=staySportsFor(p);
  const hay=[p.name,p.query,p.city,cityRu[p.city],cityUzCyr[p.city],p.sport||'',p.role||'',p.markerLabel||'',placeType(p),...assigned,...assigned.map(x=>sportEn[x]||x),...assigned.map(x=>sportUzCyr[x]||x),...assigned.map(x=>uzLatin(sportUzCyr[x]||x))].join(' ').toLowerCase();
  return !q||hay.includes(q);
 });
 $('count').textContent=tr().points(data.length);$('stayCount').textContent=stays.length;$('venueCount').textContent=venues.length;
 $('routeCount').textContent=routes.length;
 if(!data.length){$('list').innerHTML='<div class="empty">'+tr().nothing+'</div>';return}
 $('list').innerHTML=data.map(p=>{
  const assigned=staySportsFor(p),sports=assigned.length?'<div class="staySports"><span>'+tr().staySportsLabel+':</span> '+assigned.map(sportText).join(' · ')+'</div>':'';
  const role=p.role==='ou'||p.role==='oca'?'<div class="sub specialRole">'+placeType(p)+'</div>':'';
  return '<div class="item" data-place-card="'+p.id+'"><div class="dot '+p.kind+' '+(p.role||'')+'">'+markerLabel(p)+'</div><div class="copy"><div class="name">'+p.name+'</div>'+role+'<div class="sub">'+(p.kind==='venue'?tr().venue+(p.sport?' • '+sportText(p.sport):''):p.kind==='stay'?tr().stay:tr().venue)+' • '+cityText(p.city)+'</div>'+sports+'</div><div class="itemActions"><button class="iconBtn fav '+(state.favorites.has(p.id)?'active':'')+'" data-fav="'+p.id+'" type="button" aria-label="Favorite">★</button><button class="iconBtn" data-route-place="'+p.id+'" type="button" aria-label="'+uiText('Маршрут','Route','Маршрут','Marshrut')+'">↗</button><button class="iconBtn" data-map="'+p.id+'" type="button" aria-label="Map">⌖</button><a class="iconBtn" href="'+googlePlace(p)+'" target="_blank" rel="noopener" aria-label="Google Maps">G</a></div></div>'
 }).join('');
 document.querySelectorAll('[data-fav]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const id=b.dataset.fav;if(state.favorites.has(id)){state.favorites.delete(id);toast(tr().favRemoved)}else{state.favorites.add(id);toast(tr().favAdded)}save();renderPlaces()}));
 document.querySelectorAll('[data-route-place]').forEach(b=>b.onclick=e=>{e.stopPropagation();const p=byId[b.dataset.routePlace];if(p.kind==='stay')state.origin=p.id;else state.dest=p.id;ensureValidDest();updateRouteUI();switchScreen('map');setTimeout(()=>calculateRoute(),80)});
 document.querySelectorAll('[data-map]').forEach(b=>b.addEventListener('click',async e=>{e.stopPropagation();switchScreen('map');await showSinglePlace(b.dataset.map)}));
 document.querySelectorAll('[data-place-card]').forEach(c=>c.addEventListener('click',e=>{if(e.target.closest('.itemActions'))return;switchScreen('map');showSinglePlace(c.dataset.placeCard)}));
}
function renderSportList(){
 const list=$('sportList');if(!list)return;
 list.innerHTML=routes.map((r,i)=>{const a=byId[r.from],b=byId[r.to],active=state.origin===r.from&&state.dest===r.to;return '<button class="sportRow'+(active?' active':'')+'" type="button" data-sport-route="'+i+'"><span class="sportIcon" aria-hidden="true">'+sportIcon(r.sport)+'</span><span class="sportCopy"><b>'+sportText(r.sport)+'</b><small>'+a.name+' → '+b.name+'</small></span><span class="sportEstimate">'+formatDistance(r.km)+'<small>'+formatTime(r.min)+'</small></span></button>'}).join('');
 document.querySelectorAll('[data-sport-route]').forEach(b=>b.onclick=()=>selectSportRoute(Number(b.dataset.sportRoute)));
}function switchScreen(s){state.screen=s;document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));$('screen'+s[0].toUpperCase()+s.slice(1)).classList.add('active');document.querySelectorAll('.navBtn').forEach(b=>b.classList.toggle('active',b.dataset.screen===s));if(s==='map')requestAnimationFrame(()=>map.resize());window.scrollTo(0,0)}

// Vector labels prefer English, then Latin transliteration. Never use Japanese fallback.
function mapStyle(){
 const s=JSON.parse(JSON.stringify(window.BASE_STYLE));
 const dark=state.theme==='dark';
 if(dark)for(const l of s.layers){
  const p=l.paint||(l.paint={}),id=l.id;
  if(l.type==='background')p['background-color']='#101b2a';
  if(l.type==='fill'){p['fill-color']=/water/.test(id)?'#091320':/park|wood|grass/.test(id)?'#193c36':/building/.test(id)?'#2c3b50':'#1c2a3b';if(p['fill-outline-color'])p['fill-outline-color']='#334559'}
  if(l.type==='line'){p['line-color']=/water/.test(id)?'#17415a':/motorway|trunk/.test(id)?'#8a775c':/boundary/.test(id)?'#67738c':/casing/.test(id)?'#131f30':'#465971';if(p['line-gap-width'])p['line-gap-width']=p['line-gap-width']}
  if(l.type==='symbol'){if(l.layout?.['text-field']){p['text-color']='#e1eafa';p['text-halo-color']='#101b2a';p['text-halo-width']=1.5}}
 }
 if(state.mapMode==='sat'){
  s.sources.satellite={type:'raster',tileSize:256,tiles:['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],attribution:'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'};
  s.layers=[{id:'satellite',type:'raster',source:'satellite',paint:{'raster-brightness-max':dark?0.55:1}},...s.layers.filter(l=>l.type==='symbol')];
  for(const l of s.layers)if(l.type==='symbol'&&l.layout?.['text-field']){l.paint['text-color']='#fff';l.paint['text-halo-color']='#152234'}
 }
 return s;
}
function updateThemeUI(){
 const ru=state.lang==='ru',dark=state.theme==='dark';
 $('themeBtn').textContent=dark?'☀':'☾';$('themeBtn').setAttribute('aria-label',uiText(dark?'Светлая тема':'Ночная тема',dark?'Light theme':'Dark theme',dark?'Ёруғ мавзу':'Қоронғи мавзу',dark?'Yorug‘ mavzu':'Qorong‘i mavzu'));$('themeBtn').setAttribute('aria-pressed',String(dark));
 $('ceremonyTitle').textContent=uiText('Церемония открытия · 19 сентября','Opening ceremony · 19 September','Очилиш маросими · 19 сентябрь','Ochilis marosimi · 19-sentabr');
 $('clearSearch').setAttribute('aria-label',uiText('Очистить поиск','Clear search','Қидирувни тозалаш','Qidiruvni tozalash'));
 $('mapLoading').textContent=tr().loading;
}
function applyTheme(){document.documentElement.dataset.theme=state.theme;document.querySelector('meta[name="theme-color"]').content=state.theme==='dark'?'#101b2a':'#ffffff';updateThemeUI();map.setMode(state.mapMode)}
class SimpleMap{
 constructor(){this.points=[];this.geometry=[];this.markers=[];this.userLocation=null;this.styleKey='';this.failed=false;
  try{this.gl=new maplibregl.Map({container:'vectorMap',style:mapStyle(),center:[136.98,35.09],zoom:9,minZoom:6,maxZoom:18,attributionControl:true,dragRotate:false,pitchWithRotate:false,renderWorldCopies:false});
   this.styleKey=state.mapMode+state.theme;
   this.gl.touchZoomRotate.disableRotation();
   this.resizeObserver=new ResizeObserver(()=>this.gl.resize());this.resizeObserver.observe(document.getElementById("mapWrap"));
   this.gl.on('style.load',()=>{this.render();});
   this.gl.on('error',()=>{if(!navigator.onLine||!this.gl.areTilesLoaded())this.notice()});
   this.gl.on('idle',()=>{if(this.gl.queryRenderedFeatures().length&&$('mapNotice').dataset.reason==='tiles'){$('mapNotice').classList.remove('show');$('mapNotice').dataset.reason=''}});
   this.timer=setTimeout(()=>{if(!this.gl.queryRenderedFeatures().length)this.notice()},10000);
  }catch(e){this.failed=true;this.notice()}
 }
 notice(){$('mapNotice').dataset.reason='tiles';$('mapNotice').textContent=tr().tilesFail;$('mapNotice').classList.add('show')}
 set center(p){this.gl?.jumpTo({center:[p.lon,p.lat]})}
 set zoom(z){this.gl?.jumpTo({zoom:z})}
 render(){if(!this.gl)return;this.markers.forEach(m=>m.remove());this.markers=[];
   for(const p of this.points){if(p.id===USER_LOCATION_ID)continue;const el=document.createElement('button');el.className='mapPin '+p.kind+(p.role?' '+p.role:'')+(p.detour?' detour':'');el.textContent=markerLabel(p);el.setAttribute('aria-label',p.name);el.title=p.name;el.dataset.placeId=p.id;el.dataset.lat=p.lat;el.dataset.lon=p.lon;el.style.zIndex=p.role?'10000':p.kind==='special'?'9000':p.kind==='stay'?'30':'20';
   const box=document.createElement('div'),name=document.createElement('strong'),detail=document.createElement('small'),link=document.createElement('a');name.textContent=p.name;detail.textContent=(p.reference?.[state.lang]||p.reference?.en||p.reference?.ru||'')+' • '+Number(p.lat).toFixed(6)+', '+Number(p.lon).toFixed(6);detail.style.display='block';detail.style.marginTop='6px';detail.style.color='var(--muted)';box.append(name,detail);link.textContent='Google Maps ↗';link.href=googlePlace(p);link.target='_blank';link.rel='noopener';box.append(link);
   const marker=new maplibregl.Marker({element:el,anchor:'center',offset:[0,0]}).setLngLat([p.lon,p.lat]).setPopup(new maplibregl.Popup({offset:24}).setDOMContent(box)).addTo(this.gl);this.markers.push(marker);
   }
   if(this.userLocation){const el=document.createElement('div');el.className='mapPin userLocationPin';el.setAttribute('role','img');el.setAttribute('aria-label',tr().locationMarker);el.title=tr().locationMarker;el.style.zIndex='8000';const marker=new maplibregl.Marker({element:el,anchor:'center',offset:[0,0]}).setLngLat([this.userLocation.lon,this.userLocation.lat]).addTo(this.gl);this.markers.push(marker)}
  if(!this.gl.isStyleLoaded())return;
  const data={type:'FeatureCollection',features:this.geometry.length>1?[{type:'Feature',properties:{},geometry:{type:'LineString',coordinates:this.geometry.map(p=>[p.lon,p.lat])}}]:[]};
  if(this.gl.getSource('team-route'))this.gl.getSource('team-route').setData(data);else{this.gl.addSource('team-route',{type:'geojson',data});this.gl.addLayer({id:'team-route-halo',type:'line',source:'team-route',paint:{'line-color':state.theme==='dark'?'#122238':'#fff','line-width':8}});this.gl.addLayer({id:'team-route',type:'line',source:'team-route',layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':state.theme==='dark'?'#59c9ff':'#006dc7','line-width':5}})}
  }
 setUserLocation(p){this.userLocation=p?{lat:p.lat,lon:p.lon,accuracy:p.accuracy}:null;this.render()}
 clearUserLocation(){this.userLocation=null;this.render()}
 resize(){this.gl?.resize()}
 setMode(m){state.mapMode=m;$('mapMode').classList.toggle('active',m==='map');$('satMode').classList.toggle('active',m==='sat');const key=m+state.theme;if(this.gl&&key!==this.styleKey){this.styleKey=key;try{this.gl.setStyle(mapStyle(),{diff:false});this.gl.once('style.load',()=>this.render())}catch(e){state.mapMode='map';this.styleKey='';$('mapMode').classList.add('active');$('satMode').classList.remove('active');toast(uiText('Спутниковый слой недоступен','Satellite layer is unavailable','Спутник қатлами мавжуд эмас','Sputnik qatlami mavjud emas'))}}save()}
 zoomBy(d){this.gl?.zoomTo(Math.min(18,Math.max(6,this.gl.getZoom()+d)),{duration:160})}
 fit(points){if(!this.gl||!points.length)return;this.gl.resize();if(points.length===1){this.gl.jumpTo({center:[points[0].lon,points[0].lat],zoom:17});this.render();return}const b=new maplibregl.LngLatBounds();points.forEach(p=>b.extend([p.lon,p.lat]));this.gl.fitBounds(b,{padding:55,maxZoom:15,duration:250});this.render()}
}
const map=new SimpleMap();
function routePlace(id){
 if(id===USER_LOCATION_ID&&map.userLocation){const p=map.userLocation;return {id:USER_LOCATION_ID,name:tr().locationMarker||'My location',kind:'user',lat:p.lat,lon:p.lon,city:'Nagoya',reference:{ru:'Геопозиция пользователя',en:'User location',uzc:'Фойдаланувчи геопозицияси',uzl:'Foydalanuvchi geolokatsiyasi'}}}
 return byId[id]||null;
}

 let locationWatchId=null,locationActive=false,locationCentered=false,locationInJapan=false;
 function isJapanLocation(lat,lon){return Number.isFinite(lat)&&Number.isFinite(lon)&&lat>=24&&lat<=46&&lon>=122&&lon<=146.5}
 function updateLocationControls(){const enable=$('enableLocation'),route=$('routeFromLocation');if(enable){const active=locationWatchId!==null;enable.textContent=active?(tr().locationDisable||uiText('Выключить геопозицию','Disable location','Геопозицияни ўчириш','Geolokatsiyani o‘chirish')):(tr().locationEnable||uiText('Включить геопозицию','Enable location','Геопозицияни ёқиш','Geolokatsiyani yoqish'));enable.setAttribute('aria-pressed',String(active));enable.classList.toggle('active',active)}if(route){route.hidden=!(locationInJapan&&!!map.userLocation);route.textContent=tr().routeFromLocation||uiText('Построить маршрут от моей геопозиции','Build route from my location','Геопозициямдан маршрут қуриш','Geolokatsiyamdan marshrut qurish')}}
 function updateLocationStatus(){const el=$('locationStatus');if(el){if(!locationActive)el.textContent='';else el.textContent=locationInJapan?tr().locationActive:tr().locationOutside}updateLocationControls()}
 function stopLocationTracking(){if(locationWatchId!==null&&navigator.geolocation)navigator.geolocation.clearWatch(locationWatchId);locationWatchId=null;locationActive=false;locationCentered=false;locationInJapan=false;map.clearUserLocation();if(state.origin===USER_LOCATION_ID){state.origin=places[0].id;ensureValidDest();updateRouteUI()}$('locateMe').classList.remove('active');$('locateMe').setAttribute('aria-pressed','false');updateLocationStatus()}
 function locationError(err){if(err&&err.code===1){stopLocationTracking();$('locationStatus').textContent=tr().locationDenied;return}if(locationActive)$('locationStatus').textContent=tr().locationError}
 function locationUpdate(pos){const c=pos&&pos.coords;if(!c||!isJapanLocation(c.latitude,c.longitude)){locationInJapan=false;map.clearUserLocation();if(state.origin===USER_LOCATION_ID){state.origin=places[0].id;ensureValidDest();updateRouteUI()}$('locationStatus').textContent=tr().locationOutside;updateLocationControls();return}locationInJapan=true;const point={lat:c.latitude,lon:c.longitude,accuracy:Number.isFinite(c.accuracy)?c.accuracy:0};map.setUserLocation(point);if(!locationCentered&&map.gl){map.gl.easeTo({center:[point.lon,point.lat],zoom:Math.max(map.gl.getZoom(),11),duration:450});locationCentered=true}const accuracy=point.accuracy>0?' · ±'+Math.round(point.accuracy)+' '+(state.lang==='uzc'?'м':state.lang==='uzl'?'m':'м'):'';$('locationStatus').textContent=tr().locationActive+accuracy;updateLocationControls();if(state.origin===USER_LOCATION_ID)syncRouteChooserInputs()}
 function startLocationTracking(){if(!navigator.geolocation){$('locationStatus').textContent=tr().locationUnsupported;return}if(locationWatchId!==null){stopLocationTracking();return}locationActive=true;locationInJapan=false;locationCentered=false;$('locateMe').classList.add('active');$('locateMe').setAttribute('aria-pressed','true');$('locationStatus').textContent=tr().locationWaiting;updateLocationControls();locationWatchId=navigator.geolocation.watchPosition(locationUpdate,locationError,{enableHighAccuracy:true,maximumAge:0,timeout:15000})}
 function routeFromCurrentLocation(){if(!locationInJapan||!map.userLocation){toast(tr().locationRouteNeed||'Enable location first');return}state.origin=USER_LOCATION_ID;ensureValidDest();updateRouteUI();switchScreen('map');setTimeout(()=>calculateRoute(),80)}
 async function restoreLocationPermission(){if(!navigator.permissions||!navigator.geolocation)return;try{const p=await navigator.permissions.query({name:'geolocation'});if(p.state==='granted')startLocationTracking()}catch(e){} }

// Drop v8's unverified search cache, preserving personal preferences.
try{localStorage.removeItem('ain26_geo')}catch(e){}
let requestId=0,requestController=null;
function invalidateRequest(){requestId++;requestController?.abort();requestController=null;$('mapLoading').classList.remove('show');if(typeof map!=='undefined'){map.geometry=[];map.render()}}
function beginRequest(){invalidateRequest();requestController=new AbortController();return {id:requestId,signal:requestController.signal}}
function validGeo(g){return g&&Number.isFinite(g.lat)&&Number.isFinite(g.lon)&&g.lat>34.45&&g.lat<35.55&&g.lon>136.45&&g.lon<138.05}
function knownPoints(){return usedPlaces.filter(validGeo).map(p=>({...p}))}
async function fetchJSON(url,signal){const c=new AbortController(),abort=()=>c.abort();if(signal?.aborted)throw new DOMException('Aborted','AbortError');signal?.addEventListener('abort',abort,{once:true});const timer=setTimeout(abort,7000);try{const r=await fetch(url,{signal:c.signal,headers:{Accept:'application/json'}});if(!r.ok)throw Error('HTTP '+r.status);return await r.json()}finally{clearTimeout(timer);signal?.removeEventListener('abort',abort)}}

const roadCache=new Map();

async function showSinglePlace(id){const task=beginRequest(),p=byId[id];$('mapRouteCard').hidden=true;$('mapDetourCard').hidden=true;$('mapLoading').classList.add('show');$('mapNotice').classList.remove('show');try{const g=await pointFor(p,task.signal);if(task.id!==requestId)return;map.points=[{...p,...g}];map.fit(map.points);map.render()}catch(e){if(task.id!==requestId)return;$('mapNotice').dataset.reason='geocode';$('mapNotice').textContent=tr().geocodeFail;$('mapNotice').classList.add('show')}finally{if(task.id===requestId)$('mapLoading').classList.remove('show')}}
 function setMapRouteCard(a,b,r,live,metrics){const card=$('mapRouteCard');if(!card)return;const data=metrics||r;card.hidden=false;$('mapRouteTitle').textContent=r&&r.sport?sportIcon(r.sport)+' '+sportText(r.sport):tr().mapRoute;$('mapRoutePlaces').textContent=a.name+' → '+b.name;$('mapDistanceValue').textContent=data&&Number.isFinite(data.km)?formatDistance(data.km):'—';$('mapTimeValue').textContent=data&&Number.isFinite(data.min)?formatTime(data.min):'—';$('mapRouteMeta').textContent=live?uiText('Расчёт по дорожной сети','Road network estimate','Йўл тармоғи бўйича ҳисоб','Yo‘l tarmog‘i bo‘yicha hisob'):(r?tr().fromTable:tr().livePrompt);$('mapRouteGoogle').href=googleRoute(a,b)}
 function selectSportRoute(index){const r=routes[index];if(!r)return;state.origin=r.from;state.dest=r.to;updateRouteUI();renderSportList();switchScreen('map');setMapRouteCard(byId[r.from],byId[r.to],r,false);calculateRoute()}
function showAllPlaces(){invalidateRequest();map.points=knownPoints();map.fit(map.points);map.render();$('mapNotice').classList.remove('show');$('mapRouteCard').hidden=true;$('mapDetourCard').hidden=true;renderSportList()}
function rememberRoute(){const key=state.origin+'|'+state.dest;state.recent=[key,...state.recent.filter(x=>x!==key)].slice(0,6);save();renderQuick()}

function syncFrom(sel){state.origin=sel.startsWith('origin')?$(sel).value:state.origin;ensureValidDest();fillSelects();state.dest=(sel.startsWith('destination')?$(sel).value:state.dest);updateRouteUI()}
 $('themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';applyTheme();save()};$('ceremonyBtn').onclick=()=>{state.dest='mizuho_athletic';updateRouteUI();switchScreen('map');showSinglePlace('mizuho_athletic')};$('locateMe').addEventListener('click',startLocationTracking);$('enableLocation').addEventListener('click',startLocationTracking);$('routeFromLocation').addEventListener('click',routeFromCurrentLocation);
$('origin').addEventListener('change',()=>{state.origin=$('origin').value;ensureValidDest();updateRouteUI()});$('originMap').addEventListener('change',()=>{state.origin=$('originMap').value;ensureValidDest();updateRouteUI()});$('destination').addEventListener('change',()=>{state.dest=$('destination').value;updateRouteUI()});$('destinationMap').addEventListener('change',()=>{state.dest=$('destinationMap').value;updateRouteUI()});
$('ruBtn').addEventListener('click',()=>setLanguage('ru'));$('enBtn').addEventListener('click',()=>setLanguage('en'));$('uzcBtn').addEventListener('click',()=>setLanguage('uzc'));$('uzlBtn').addEventListener('click',()=>setLanguage('uzl'));$('mapMode').addEventListener('click',()=>map.setMode('map'));$('satMode').addEventListener('click',()=>map.setMode('sat'));$('zoomIn').addEventListener('click',()=>map.zoomBy(1));$('zoomOut').addEventListener('click',()=>map.zoomBy(-1));$('resetMap').addEventListener('click',showAllPlaces);$('showAllMap').addEventListener('click',showAllPlaces);$('drawRoute').addEventListener('click',()=>drawCurrentRoute(true));$('showOnMap').addEventListener('click',()=>{switchScreen('map');setTimeout(()=>drawCurrentRoute(true),80)});$('liveRoute').addEventListener('click',refreshLive);$('search').addEventListener('input',()=>{renderPlaces();if($('search').value.trim())switchScreen('places')});$('clearSearch').addEventListener('click',()=>{$('search').value='';renderPlaces()});document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.filter=b.dataset.filter;renderPlaces()}));document.querySelectorAll('.navBtn').forEach(b=>b.addEventListener('click',()=>switchScreen(b.dataset.screen)));window.addEventListener('online',networkUpdate);window.addEventListener('offline',networkUpdate);window.addEventListener('resize',()=>map.resize());

// --- PWA install + route sharing ---
let deferredInstall=null;
const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
let standalone=window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
function updateInstallUI(){
  if(standalone){$('installBtn').classList.remove('show');return}
  $('installBtn').classList.add('show');
}
window.addEventListener('appinstalled',()=>{standalone=true;updateInstallUI()});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;updateInstallUI()});
$('installBtn').addEventListener('click',async()=>{
  const help=$('installHelp');
  if(deferredInstall){deferredInstall.prompt();try{const r=await deferredInstall.userChoice;if(r&&r.outcome==='accepted'){$('installBtn').textContent=tr().installed;$('installBtn').classList.remove('show')}}catch(e){}deferredInstall=null;return}
  if(isIOS){help.textContent=tr().iosInstall;help.classList.toggle('show');return}
  help.textContent=location.protocol==='file:'?uiText('Для установки откройте опубликованную HTTPS-версию приложения в браузере.','To install, open the published HTTPS version of the app in your browser.','Ўрнатиш учун браузерда илова HTTPS версиясини очинг.','O‘rnatish uchun ilovaning HTTPS versiyasini brauzerda oching.') :uiText('Откройте меню браузера и выберите «Установить приложение».','Open the browser menu and choose “Install app”.','Браузер менюсини очиб, «Иловани ўрнатиш»ни танланг.','Brauzer menyusini ochib, “Ilovani o‘rnatish”ni tanlang.');help.classList.toggle('show');
});
$('shareRoute').addEventListener('click',async()=>{
  const a=routePlace(state.origin),b=routePlace(state.dest),url=googleRoute(a,b),title=tr().shareTitle,text=a.name+' → '+b.name;
  if(navigator.share){try{await navigator.share({title,text,url});return}catch(e){if(e&&e.name==='AbortError')return}}
  // Clipboard is best-effort; fall back to opening the shareable route.
  try{await navigator.clipboard.writeText(url);toast(tr().shareFail)}catch(e){window.open(url,'_blank','noopener')}
});
if(!window.SINGLE_FILE_PREVIEW&&'serviceWorker' in navigator&&location.protocol.startsWith('http')){
 let reloading=false;const hadController=!!navigator.serviceWorker.controller;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(hadController&&!reloading){reloading=true;location.reload()}});
 navigator.serviceWorker.register('./service-worker.js',{updateViaCache:'none'}).then(r=>r.update().catch(()=>{})).catch(()=>{});
}
updateInstallUI();
$('screenPlaces').appendChild($('installBtn'));$('screenPlaces').appendChild($('installHelp'));

/* v8 route model: every place can be an origin or a destination; distances come from the road router. */
Object.assign(T.ru,{source:'официальные названия • расчёт по дорогам',origin:'Откуда',destination:'Куда',routeSearch:'Найти объект, отель или спорт…',delegation:'Расстояние по дороге',live:'Время в пути',livePrompt:'После расчёта появится время в пути',liveRefresh:'Рассчитать маршрут',liveFail:'Онлайн-маршрут сейчас недоступен. Проверьте интернет или откройте Google Maps.',note:'Расстояние и время рассчитываются по дорожной сети между выбранными точками.',data:'Названия и адреса используются для поиска точных точек на карте. Расстояние и время приложение рассчитывает отдельно по дорожной сети.',internet:'Карта, поиск точек и расчёт маршрута требуют интернета. Список мест и ссылки на навигацию доступны без него.',stayCount:'мест проживания',venueCount:'объектов соревнований',detourTab:'Можно заехать по дороге',detourIntro:'Подберём места, куда можно заехать между началом и концом маршрута, с небольшим объездом.',findDetours:'Найти варианты по дороге',detourLoading:'Проверяем варианты по дорожной сети…',detourEmpty:'Подходящих вариантов с небольшим объездом не найдено.',detourRoute:'Добавить остановку',mapDistanceLabel:'Расстояние',mapTimeLabel:'Время в пути',sportPanel:'Виды спорта и маршруты',mapDetours:'Объекты по пути',mapDetourRadius:'по пути ≤3 км · у финиша ≤5 км'});
Object.assign(T.en,{source:'official place names • road calculation',origin:'From',destination:'To',routeSearch:'Search hotel, venue or sport…',delegation:'Road distance',live:'Travel time',livePrompt:'Travel time appears after calculation',liveRefresh:'Calculate route',liveFail:'Online routing is unavailable. Check your connection or open Google Maps.',note:'Distance and time are calculated on the road network between the selected points.',data:'Official names and addresses are used to find precise map points. Distance and time are calculated separately on the road network.',internet:'Map, place search and route calculation require internet. The place list and navigation links remain available offline.',detourTab:'Stops along the way',detourIntro:'Find places that can be visited between the start and end with a small detour.',findDetours:'Find stops along the way',detourLoading:'Checking options on the road network…',detourEmpty:'No stops with a small detour were found.',detourRoute:'Add stop',mapDistanceLabel:'Distance',mapTimeLabel:'Travel time',sportPanel:'Sports and routes',mapDetours:'Stops near the route',mapDetourRadius:'along route ≤3 km · finish ≤5 km'});
T.uzc={...T.ru};T.uzl={...T.ru};
Object.assign(T.uzc,{subtitle:'Ўзбекистон НОКи | Халқаро алоқалар ва протокол департаменти',search:'Объект, меҳмонхона ёки спорт турини қидириш…',routeSearch:'Объект, меҳмонхона ёки спорт турини қидириш…',checking:'Уланиш текширилмоқда…',online:'Онлайн',offline:'Офлайн • маълумотлар сақланган',source:'нуқталар текширилди • 13.09.2026 • v18',mapTitle:'Нагоя, Айти ва Гифу харитаси',map:'Харита',sat:'Спутник',stay:'Яшаш жойи',venue:'Объект',mapRoute:'Харитадаги маршрут',origin:'Қаердан',destination:'Қаерга',showRoute:'Маршрутни кўрсатиш',planner:'Маршрут режаси',delegation:'Йўл масофаси',live:'Йўл вақти',livePrompt:'Маршрутни ҳисоблаш учун босинг',liveRefresh:'Маршрутни ҳисоблаш',onMap:'Харитада кўрсатиш',note:'Масофа ва вақт танланган нуқталар ўртасидаги йўл тармоғи бўйича ҳисобланади.',quick:'Тезкор маршрутлар',all:'Барчаси',stays:'Яшаш жойлари',venues:'Объектлар',fav:'★ Танланганлар',places:'Нуқталар',sources:'Маълумот манбалари',stayCount:'яшаш жойи',venueCount:'мусобақа объектлари',routeCount:'тасдиқланган маршрутлар',lang:'рус, инглиз ва ўзбек тиллари',navMap:'Харита',navRoute:'Маршрут',navPlaces:'Нуқталар',points:n=>n+' та нуқта',nothing:'Ҳеч нарса топилмади',open:'Google',mapPlace:'Харита',showAll:'Барча объектларни кўрсатиш',staySportsLabel:'Спорт турлари',delegationData:(km,min)=>km+' км • '+min+' дақ',fromTable:'делегация жойлашув жадвалидан',loading:'Нуқталар юкланмоқда…',geocodeFail:'Нуқтани аниқлаб бўлмади. Google Maps орқали очинг.',tilesFail:'Харита юкланмади. Интернетни текширинг.',liveLoading:'Йўл маршрути ҳисобланмоқда…',liveFail:'Онлайн маршрутни ҳисоблаб бўлмади. Нуқталар сақланди.',liveValue:(km,min)=>km+' км • ~'+min+' дақ',favAdded:'Танланганларга қўшилди',favRemoved:'Танланганлардан олиб ташланди',routeReady:'Маршрут харитада кўрсатилди',modeMap:'Харита',modeSat:'Спутник',install:'Ўрнатиш',installed:'Ўрнатилди',share:'Маршрутни улашиш',locationButton:'Геопозициям',locationMarker:'Сизнинг жойлашувингиз',locationWaiting:'Геопозиция учун рухсат сўралмоқда…',locationActive:'Геопозиция ёқилган',locationOutside:'Япониядан ташқарида — белги яширилди',locationDenied:'Геопозицияга рухсат берилмади',locationUnsupported:'Браузерда геопозиция мавжуд эмас',locationError:'Жойлашувни олиб бўлмади. Қайта уриниб кўрамиз…',locationEnable:'Геопозицияни ёқиш',locationDisable:'Геопозицияни ўчириш',routeFromLocation:'Геопозициямдан маршрут қуриш',locationRouteNeed:'Аввал геопозицияни ёқинг',detourTab:'Йўлда кириб ўтиш мумкин',detourIntro:'Маршрут боши ва охири орасида кичик айланиш билан кириш мумкин бўлган жойларни топинг.',findDetours:'Йўлдаги вариантларни топиш',detourLoading:'Йўл тармоғида вариантлар текширилмоқда…',detourEmpty:'Кичик айланишли мос жойлар топилмади.',detourRoute:'Тўхташ қўшиш',mapDistanceLabel:'Масофа',mapTimeLabel:'Йўл вақти',sportPanel:'Спорт турлари ва маршрутлар',mapDetours:'Йўл яқинидаги объектлар',mapDetourRadius:'йўлда ≤3 км · финишда ≤5 км'});
Object.assign(T.uzl,{subtitle:'O‘zbekiston MOQ | Xalqaro aloqalar va protokol departamenti',search:'Obyekt, mehmonxona yoki sport turini qidiring…',routeSearch:'Obyekt, mehmonxona yoki sport turini qidiring…',checking:'Ulanish tekshirilmoqda…',online:'Onlayn',offline:'Oflayn • maʼlumotlar saqlangan',source:'nuqtalar tekshirildi • 13.09.2026 • v18',mapTitle:'Nagoya, Aichi va Gifu xaritasi',map:'Xarita',sat:'Sputnik',stay:'Yashash joyi',venue:'Obyekt',mapRoute:'Xaritadagi marshrut',origin:'Qayerdan',destination:'Qayerga',showRoute:'Marshrutni ko‘rsatish',planner:'Marshrut rejalashtirgich',delegation:'Yo‘l masofasi',live:'Yo‘l vaqti',livePrompt:'Marshrutni hisoblash uchun bosing',liveRefresh:'Marshrutni hisoblash',onMap:'Xaritada ko‘rsatish',note:'Masofa va vaqt tanlangan nuqtalar orasidagi yo‘l tarmog‘i bo‘yicha hisoblanadi.',quick:'Tezkor marshrutlar',all:'Barchasi',stays:'Yashash joylari',venues:'Obyektlar',fav:'★ Tanlanganlar',places:'Nuqtalar',sources:'Maʼlumot manbalari',stayCount:'yashash joyi',venueCount:'musobaqa obyektlari',routeCount:'tasdiqlangan marshrutlar',lang:'rus, ingliz va o‘zbek tillari',navMap:'Xarita',navRoute:'Marshrut',navPlaces:'Nuqtalar',points:n=>n+' ta nuqta',nothing:'Hech narsa topilmadi',open:'Google',mapPlace:'Xarita',showAll:'Barcha obyektlarni ko‘rsatish',staySportsLabel:'Sport turlari',delegationData:(km,min)=>km+' km • '+min+' daq',fromTable:'delegatsiya joylashuv jadvalidan',loading:'Nuqtalar yuklanmoqda…',geocodeFail:'Nuqta aniqlanmadi. Google Maps orqali oching.',tilesFail:'Xarita yuklanmadi. Internetni tekshiring.',liveLoading:'Yo‘l marshruti hisoblanmoqda…',liveFail:'Onlayn marshrutni hisoblab bo‘lmadi. Nuqtalar saqlandi.',liveValue:(km,min)=>km+' km • ~'+min+' daq',favAdded:'Tanlanganlarga qo‘shildi',favRemoved:'Tanlanganlardan olib tashlandi',routeReady:'Marshrut xaritada ko‘rsatildi',modeMap:'Xarita',modeSat:'Sputnik',install:'O‘rnatish',installed:'O‘rnatildi',share:'Marshrutni ulashish',locationButton:'Geolokatsiyam',locationMarker:'Sizning joylashuvingiz',locationWaiting:'Geolokatsiya uchun ruxsat so‘ralmoqda…',locationActive:'Geolokatsiya yoqilgan',locationOutside:'Yaponiyadan tashqarida — belgi yashirildi',locationDenied:'Geolokatsiyaga ruxsat berilmadi',locationUnsupported:'Brauzerda geolokatsiya mavjud emas',locationError:'Joylashuvni olib bo‘lmadi. Qayta urinib ko‘ramiz…',locationEnable:'Geolokatsiyani yoqish',locationDisable:'Geolokatsiyani o‘chirish',routeFromLocation:'Geolokatsiyamdan marshrut qurish',locationRouteNeed:'Avval geolokatsiyani yoqing',detourTab:'Yo‘lda kirib o‘tish mumkin',detourIntro:'Marshrut boshi va oxiri orasida kichik aylanib kirish mumkin bo‘lgan joylarni toping.',findDetours:'Yo‘ldagi variantlarni topish',detourLoading:'Yo‘l tarmog‘ida variantlar tekshirilmoqda…',detourEmpty:'Kichik aylanmali mos joylar topilmadi.',detourRoute:'To‘xtash qo‘shish',mapDistanceLabel:'Masofa',mapTimeLabel:'Yo‘l vaqti',sportPanel:'Sport turlari va marshrutlar',mapDetours:'Yo‘l yaqinidagi obyektlar',mapDetourRadius:'yo‘lda ≤3 км · finishda ≤5 км'});
function formatDistance(km){return Number(km).toFixed(1).replace('.',state.lang==='ru'||state.lang==='uzc'?',':'.')+' '+uiText('км','km','км','km')}
function formatTime(min){return '~'+Math.round(min)+' '+uiText('мин','min','дақ','daq')}
const routeSearchAliases={
 ou_leadership:'ou оу leadership руководство leadership residence management',
 oca_hq:'oca оса oca hq oca headquarters headquarters штаб office',
 cruise:'cruise ship kinjo-futo kinjo futo berth pier',
 villas:'villas garden-futo garden futo residence'
};
function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
function routeSearchText(p){
 const assigned=staySportsFor(p),sports=[p.sport,...assigned].filter(Boolean),extra=[];
 sports.forEach(s=>{const low=String(s).toLowerCase();extra.push(s,sportEn[s]||'',sportUzCyr[s]||'',uzLatin(sportUzCyr[s]||''));if(/байдар|каноэ|греб/.test(low))extra.push('paddle canoe kayak rowing');if(/сквош/.test(low))extra.push('squash');if(/регби|футбол/.test(low))extra.push('rugby football soccer');if(/стрел/.test(low))extra.push('shooting archery');if(/легк|лёгк|ходьб/.test(low))extra.push('athletics race walking track')});
 if(p.kind==='stay')extra.push('hotel accommodation residence');if(p.role==='ou')extra.push('ou leadership');if(p.role==='oca')extra.push('oca hq oca headquarters headquarters');
 if(p.id===USER_LOCATION_ID)extra.push('my location моя геопозиция геолокация geolokatsiya geolokatsiyam');
 return [p.name,p.query,p.city,cityRu[p.city],p.markerLabel,p.role,...extra,routeSearchAliases[p.id]||''].filter(Boolean).join(' ').toLowerCase();
}
function routeSearchMatch(p,q){const text=routeSearchText(p);if(q.length<=2)return text.split(/[^a-zа-яё0-9]+/i).filter(Boolean).includes(q);return text.includes(q)}
function routeOptionDetail(p){
 if(p.id===USER_LOCATION_ID)return tr().locationMarker+' · '+cityText(p.city);
 const assigned=staySportsFor(p),label=p.role==='ou'?'OU':p.role==='oca'?'OCA headquarters':p.kind==='venue'?(p.sport?sportText(p.sport):tr().venue):(assigned.length?sportSummary(assigned,2):tr().stay);
 return label+' · '+cityText(p.city);
}
function routeChooserElements(kind){const prefix=kind==='origin'?'origin':'destination';return {input:$(prefix+'Search'),options:$(prefix+'Options')}}
function closeRouteChooser(kind){const {input,options}=routeChooserElements(kind);if(!input||!options)return;options.hidden=true;input.setAttribute('aria-expanded','false')}
function renderRouteChooser(kind,query){
 const {input,options}=routeChooserElements(kind);if(!input||!options)return;const selected=kind==='origin'?state.origin:state.dest,selectedName=routePlace(selected)?.name||'';let q=String(query??'').trim().toLowerCase();if(q===selectedName.toLowerCase())q='';
 const data=places.filter(p=>!q||routeSearchMatch(p,q)),blocked=kind==='origin'?($('destinationMap')?.value||state.dest):($('originMap')?.value||state.origin);
 options.innerHTML=data.length?data.map(p=>'<button class="routeOption" type="button" role="option" data-route-option="'+escapeHTML(p.id)+'"'+(p.id===blocked?' disabled aria-disabled="true"':'')+'><strong>'+escapeHTML(p.name)+'</strong><small>'+escapeHTML(routeOptionDetail(p))+'</small></button>').join(''):'<div class="routeNoResults">'+uiText('Ничего не найдено','Nothing found','Ҳеч нарса топилмади','Hech narsa topilmadi')+'</div>';
 options.hidden=false;input.setAttribute('aria-expanded','true');options.querySelectorAll('[data-route-option]').forEach(b=>{b.addEventListener('mousedown',e=>e.preventDefault());b.addEventListener('click',()=>{if(b.disabled)return;const p=routePlace(b.dataset.routeOption);if(!p)return;if(kind==='origin'){state.origin=p.id;ensureValidDest()}else state.dest=p.id;closeRouteChooser(kind);updateRouteUI()})});
}
function syncRouteChooserInputs(){const a=routePlace(state.origin),b=routePlace(state.dest);if($('originSearch'))$('originSearch').value=a?.name||'';if($('destinationSearch'))$('destinationSearch').value=b?.name||'';closeRouteChooser('origin');closeRouteChooser('destination')}
function initRouteChoosers(){[['origin','originSearch'],['destination','destinationSearch']].forEach(([kind,id])=>{const input=$(id);if(!input)return;input.addEventListener('focus',()=>renderRouteChooser(kind,input.value));input.addEventListener('click',()=>renderRouteChooser(kind,input.value));input.addEventListener('input',()=>renderRouteChooser(kind,input.value));input.addEventListener('keydown',e=>{if(e.key==='Escape'){closeRouteChooser(kind);input.blur()}else if(e.key==='ArrowDown'){const {options}=routeChooserElements(kind);if(options&&!options.hidden)options.querySelector('[data-route-option]')?.focus()}});input.addEventListener('blur',()=>setTimeout(()=>closeRouteChooser(kind),180))})}
function placeOption(p){const assigned=staySportsFor(p);const venueSport=p.kind==='venue'&&p.sport?' · '+compactSport(sportText(p.sport)):'';const extra=assigned.length?' · '+sportSummary(assigned,3):venueSport;const role=p.role==='oca'?' · OCA HQ':p.role==='ou'?' · OU':'';return `<option value="${p.id}">${p.name}${extra||role}</option>`}
function ensureValidDest(){if(!routePlace(state.origin))state.origin=places[0].id;if(!routePlace(state.dest)||state.dest===state.origin)state.dest=places.find(p=>p.id!==state.origin)?.id||places[1].id}
function fillSelects(){ensureValidDest();const html=places.map(placeOption).join(''),originHtml=state.origin===USER_LOCATION_ID&&routePlace(USER_LOCATION_ID)?'<option value="'+USER_LOCATION_ID+'">'+escapeHTML(routePlace(USER_LOCATION_ID).name)+'</option>'+html:html;for(const id of ['origin','originMap']){$(id).innerHTML=originHtml;$(id).value=state.origin}for(const id of ['destination','destinationMap']){$(id).innerHTML=html;$(id).value=state.dest}syncRouteChooserInputs()}
function updateRouteUI(){
 invalidateRequest();$('mapRouteCard').hidden=true;$('mapDetourCard').hidden=true;ensureValidDest();fillSelects();const a=routePlace(state.origin),b=routePlace(state.dest);$('distance').textContent='—';$('routeInfo').textContent=uiText('Нажмите «Рассчитать маршрут».','Tap “Calculate route”.','«Маршрутни ҳисоблаш» тугмасини босинг.','“Marshrutni hisoblash” tugmasini bosing.');$('delegationInfo').textContent=uiText('После расчёта появится длина маршрута.','Distance appears after calculation.','Ҳисобдан сўнг масофа чиқади.','Hisobdan so‘ng masofa chiqadi.');$('liveInfo').textContent=tr().livePrompt;$('googleLink').href=googleRoute(a,b);$('appleLink').href=appleRoute(a,b);$('distance').parentElement.classList.remove('calculated');$('detourList').innerHTML='';$('detourStatus').textContent='';save();renderQuick();renderSportList()
}function renderQuick(){const base=state.recent.length?state.recent:[];$('quickRoutes').innerHTML=base.map(key=>{const [f,t]=key.split('|'),a=byId[f],b=byId[t];if(!a||!b)return '';return `<button class="quick" type="button" data-route="${key}"><b>${a.name} → ${b.name}</b><span>${uiText('Рассчитать по дороге','Calculate on roads','Йўл бўйича ҳисоблаш','Yo‘l bo‘yicha hisoblash')}</span></button>`}).join('');document.querySelectorAll('.quick').forEach(b=>b.onclick=()=>{[state.origin,state.dest]=b.dataset.route.split('|');updateRouteUI();switchScreen('route')})}
function routeText(km,min){return `${Number(km).toFixed(1).replace('.',state.lang==='ru'||state.lang==='uzc'?',':'.')} ${uiText('км','km','км','km')} • ${Math.round(min)} ${uiText('мин','min','дақ','daq')}`}
async function pointFor(p,signal){return MapCore.pointFor(p,signal)}
async function calculateRoute(){
  const task=beginRequest(),a=routePlace(state.origin),b=routePlace(state.dest),route=currentRoute();if(!a||!b||a.id===b.id)return;
  setMapRouteCard(a,b,route,false);renderSportList();
  $('mapLoading').classList.add('show');$('mapLoading').textContent=tr().liveLoading;$('distance').textContent='…';$('liveInfo').textContent=tr().liveLoading;$('mapNotice').classList.remove('show');
 // Keep the actual points visible even when the road service is unavailable.
 map.points=[{...a},{...b}];map.fit(map.points);map.render();
 try{const rr=await roadRoute(a,b,task.signal);if(task.id!==requestId)return;
  map.geometry=rr.geometry;map.fit([...rr.geometry,a,b]);map.render();const value=routeText(rr.km,rr.min);
  const gap=Math.max(rr.startGap,rr.endGap);const approach=gap>25?uiText(' Дорога проходит до '+Math.ceil(gap)+' м от метки; участок по территории не включён.',' The road is up to '+Math.ceil(gap)+' m from the marker; travel within the grounds is excluded.',' Йўл белгидан '+Math.ceil(gap)+' м гача узоқ; ҳудуд ичидаги қисм киритилмаган.',' Yo‘l belgidan '+Math.ceil(gap)+' m gacha uzoq; hudud ichidagi qism kiritilmagan.'):'';
   $('distance').textContent=value;$('delegationInfo').textContent=value;$('liveInfo').textContent=uiText('Оценка без пробок','Estimate without live traffic','Тиражсиз тахминий вақт','Tirbandliksiz taxminiy vaqt')+approach;
   setMapRouteCard(a,b,route,true,{km:rr.km,min:rr.min});
  $('routeInfo').textContent=a.name+' → '+b.name;$('distance').parentElement.classList.add('calculated');rememberRoute();
 }catch(e){if(task.id===requestId){$('distance').textContent='—';$('liveInfo').textContent=tr().liveFail;$('mapNotice').dataset.reason='route';$('mapNotice').textContent=tr().liveFail;$('mapNotice').classList.add('show')}}
 finally{if(task.id===requestId)$('mapLoading').classList.remove('show')}
}
async function drawCurrentRoute(){return calculateRoute()}
async function roadRoute(a,b,signal){
 if(signal?.aborted)throw new DOMException('Aborted','AbortError');
 const key=[a.lon,a.lat,b.lon,b.lat].join(',');if(roadCache.has(key))return roadCache.get(key);
 let last;for(const base of ['https://router.project-osrm.org/route/v1/driving/','https://routing.openstreetmap.de/routed-car/route/v1/driving/']){
  try{const d=await fetchJSON(base+a.lon+','+a.lat+';'+b.lon+','+b.lat+'?overview=full&geometries=geojson&steps=false',signal);const out=MapCore.validateRoute(d,a,b);if(signal?.aborted)throw new DOMException('Aborted','AbortError');roadCache.set(key,out);return out}catch(e){if(signal?.aborted)throw e;last=e}
 }throw last||Error('route');
}
async function refreshLive(){return calculateRoute()}
function googleViaRoute(a,s,b){return MapCore.googleRoute(a,b,s)}
function distanceToPath(p,geometry){let best=Infinity;for(const g of geometry)best=Math.min(best,MapCore.metres(p,g));return best}
function detourItems(items){return items.map(x=>{const tags=[];if(x.pathM<=3000)tags.push(uiText('по пути ≤3 км','along route ≤3 km','йўлда ≤3 км','yo‘lda ≤3 km'));if(x.endM<=5000)tags.push(uiText('у финиша ≤5 км','finish area ≤5 km','финишда ≤5 км','finishda ≤5 km'));return '<div class="detourItem"><div><b>'+sportIcon(x.p.sport)+' '+x.p.name+'</b><span>'+cityText(x.p.city)+' • '+tags.join(' · ')+' • '+formatDistance(x.pathM/1000)+' '+uiText('до линии','to line','чизиққача','chiziqqacha')+'</span></div><a class="btn soft" href="'+googleViaRoute(routePlace(state.origin),x.p,routePlace(state.dest))+'" target="_blank" rel="noopener">'+tr().detourRoute+'</a></div>'}).join('')}
async function findDetours(){const task=beginRequest(),a=routePlace(state.origin),b=routePlace(state.dest);$('detourStatus').textContent=tr().detourLoading;$('detourList').innerHTML='';try{const [ga,gb]=await Promise.all([pointFor(a,task.signal),pointFor(b,task.signal)]);const direct=await roadRoute(ga,gb,task.signal);if(task.id!==requestId)return;const options=places.filter(p=>p.id!==a.id&&p.id!==b.id).map(p=>({p,pathM:distanceToPath(p,direct.geometry),endM:MapCore.metres(p,b)})).filter(x=>x.pathM<=3000||x.endM<=5000).sort((x,y)=>Math.min(x.pathM,x.endM)-Math.min(y.pathM,y.endM)).slice(0,12);map.geometry=direct.geometry;map.points=[{...a},{...b},...options.map(x=>({...x.p,detour:true}))];map.fit([...direct.geometry,a,b,...options.map(x=>x.p)]);map.render();const html=options.length?detourItems(options):'<div class="empty">'+tr().detourEmpty+'</div>';$('detourStatus').textContent=options.length?'':tr().detourEmpty;$('detourList').innerHTML=html;$('mapDetourList').innerHTML=html;$('mapDetourCard').hidden=!options.length;setMapRouteCard(a,b,currentRoute(),true,{km:direct.km,min:direct.min});switchScreen('map')}catch(e){if(task.id===requestId){$('detourStatus').textContent=tr().liveFail;$('mapDetourCard').hidden=true}}}function renderDetourText(){const x=tr();$('detourTab').textContent=x.detourTab;$('detourIntro').textContent=x.detourIntro;$('findDetours').textContent=x.findDetours}
 $('findDetours').addEventListener('click',findDetours);$('mapFindDetours').addEventListener('click',findDetours);$('detourTab').addEventListener('click',()=>{$('detourPanel').classList.toggle('open',true)});$('ruBtn').addEventListener('click',()=>setTimeout(renderDetourText,0));$('enBtn').addEventListener('click',()=>setTimeout(renderDetourText,0));
Object.assign(T.ru,{source:'точки сверены • 13.09.2026 • v18',offline:'Офлайн • список и точки сохранены',data:'Встроены координаты всех 61 точек (24 места проживания, 36 площадок и 1 штаб) Айти и Гифу. Пять записей Гифу добавлены для футбола и хоккея на траве. Виллы и причал отмечены по вашим ссылкам. Для временных площадок указан выбранный ориентир; подробности — в отчёте сверки.',internet:'Координаты, список, поиск и избранное доступны без интернета. Подложка карты и расчёт дорог требуют подключения.',note:'Метки показывают выбранные точки объектов. Автомаршрут идёт по доступным дорогам; пробки, перекрытия Игр и проход по территории не учтены.',geocodeFail:'Данные точки недоступны. Перезагрузите приложение.',liveFail:'Не удалось рассчитать дорогу. Точки показаны на карте — откройте маршрут в Google Maps или Apple Maps.',locationButton:'Моя геопозиция',locationMarker:'Ваше местоположение',locationWaiting:'Запрашиваем разрешение на геопозицию…',locationActive:'Геопозиция включена',locationOutside:'Вы вне Японии — метка скрыта',locationDenied:'Доступ к геопозиции запрещён',locationUnsupported:'Геопозиция недоступна в этом браузере',locationError:'Не удалось получить геопозицию. Повторяем попытку…'});
Object.assign(T.en,{source:'locations reviewed • 13 Sep 2026 • v18',offline:'Offline • list and coordinates saved',data:'All 61 Aichi and Gifu locations have embedded coordinates (24 stays, 36 venues and 1 headquarters). Five Gifu records cover football and field hockey. Villas and cruise berth use your links. Temporary venues identify a reference point; see the coordinate review for details.',internet:'Coordinates, list, search and favorites work offline. Map tiles and road routing require a connection.',note:'Markers show the selected venue points. Driving estimates follow available roads and exclude traffic, Games closures and travel within the grounds.',geocodeFail:'Location data unavailable. Reload the app.',liveFail:'Road calculation is unavailable. The points are shown — open the route in Google Maps or Apple Maps.',locationButton:'My location',locationMarker:'Your location',locationWaiting:'Requesting location permission…',locationActive:'Location tracking is on',locationOutside:'Outside Japan — marker hidden',locationDenied:'Location access was denied',locationUnsupported:'Location is unavailable in this browser',locationError:'Could not read your location. Retrying…'});
Object.assign(T.uzc,{offline:'Офлайн • рўйхат ва нуқталар сақланган',data:'Айти ва Гифудаги барча 61 нуқта координаталари киритилган. Масофа ва маршрутлар йўл тармоғи бўйича ҳисобланади.',internet:'Нуқталар, қидирув ва танланганлар офлайн ишлайди. Харита қатламлари ва йўл ҳисоблаши интернет талаб қилади.'});
Object.assign(T.uzl,{offline:'Oflayn • ro‘yxat va nuqtalar saqlangan',data:'Aichi va Gifu hududidagi barcha 61 nuqta koordinatalari kiritilgan. Masofa va marshrutlar yo‘l tarmog‘i bo‘yicha hisoblanadi.',internet:'Nuqtalar, qidiruv va tanlanganlar oflayn ishlaydi. Xarita qatlamlari va yo‘l hisoblash internet talab qiladi.'});

initRouteChoosers();fillSelects();setLanguage(state.lang);renderDetourText();updateRouteUI();renderPlaces();renderQuick();networkUpdate();map.setMode(state.mapMode);switchScreen('map');applyTheme();map.points=knownPoints();map.render();restoreLocationPermission();
})();
