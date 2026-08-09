// Ícones SVG reutilizados em toda a interface (chaves usadas por render.js)
/* ============ ÍCONES ============ */
const ICON = {
  bulb:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3z"/></svg>',
  tv:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  lock:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  therm:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0z"/></svg>',
  cam:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',
  drop:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/></svg>',
  car:'<svg class="car-icon" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5b6c8c" stroke-width="1.6"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="3" y="11" width="18" height="7" rx="2"/><circle cx="7.5" cy="18" r="1.4"/><circle cx="16.5" cy="18" r="1.4"/></svg>',
  moon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5z"/></svg>',
  home:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 11.5L12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"/></svg>',
  shield:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/></svg>',
  sofa:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 13v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 13a2 2 0 0 0-2 2v3h20v-3a2 2 0 0 0-2-2M4 13h16M6 18v2M18 18v2"/></svg>',
  globe:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
  chevron:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg>',
};
// Estado da aplicação: cômodos, cenas rápidas e dispositivos favoritos.
// Isso é o que voce vai editar/expandir quando plugar dispositivos reais.
/* ============ ESTADO ============ */
const state = {
  rooms: [
    { id:'lavanderia', name:'Lavanderia',    light:true  },
    { id:'cozinha',    name:'Cozinha',       light:false },
    { id:'sala',       name:'Sala de Estar', light:true, tv:true },
    { id:'garagem',    name:'Garagem',       light:false, car:true, gate:'fechado' },
    { id:'felipe',     name:'Quarto Felipe', light:false },
    { id:'banheiro',   name:'Banheiro',      light:false },
    { id:'milena',     name:'Quarto Milena', light:true  },
    { id:'suite',      name:'Suíte',         light:false, ac:22 },
    { id:'quintal',    name:'Quintal',       light:true, cam:'online', irrigation:false },
  ],
  scenes: [
    { id:'boanoite', label:'Boa noite', icon:'moon', cls:'c-moon' },
    { id:'chegueiemcasa', label:'Cheguei em casa', icon:'home', cls:'c-home' },
    { id:'sairdecasa', label:'Sair de casa', icon:'shield', cls:'c-shield' },
    { id:'fimdesemana', label:'Fim de semana', icon:'sofa', cls:'c-sofa' },
  ],
  favorites: [
    { id:'luzsala', name:'Luz da Sala', room:'Sala de Estar', type:'bulb', on:true },
    { id:'luzcozinha', name:'Luz da Cozinha', room:'Cozinha', type:'bulb', on:false },
    { id:'arsuite', name:'Ar da Suíte', room:'Suíte', type:'therm', on:true, extra:'22°C' },
    { id:'portao', name:'Portão Eletrônico', room:'Garagem', type:'lock', on:false },
    { id:'camfrente', name:'Câmera da Frente', room:'Fachada', type:'cam', on:true, extra:'Online', link:true },
  ]
};
// Desenhos SVG (vista de topo) usados como plano de fundo de cada cômodo na planta.
// Estilo "render 3D simplificado": formas sólidas, gradiente sutil e sombra suave,
// em vez de contorno tipo planta técnica.
/* ============ MOBÍLIA (vista de topo, estilo dollhouse) ============ */
const FLOOR = '#111d33';

// Defs compartilhadas (gradientes + sombra). Repetidas por cômodo com IDs únicos
// para não colidir quando várias <svg> estiverem na mesma página.
function defs(p){
  return `<defs>
    <filter id="${p}-shadow" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="2.2" stdDeviation="2.4" flood-color="#000" flood-opacity=".45"/>
    </filter>
    <linearGradient id="${p}-wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b8814c"/><stop offset="1" stop-color="#8a5a2f"/>
    </linearGradient>
    <linearGradient id="${p}-fabric" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#46577c"/><stop offset="1" stop-color="#2b3752"/>
    </linearGradient>
    <linearGradient id="${p}-linen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f1e9d8"/><stop offset="1" stop-color="#d9cdb0"/>
    </linearGradient>
    <linearGradient id="${p}-pillow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe4ee"/>
    </linearGradient>
    <linearGradient id="${p}-metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cfd8e6"/><stop offset="1" stop-color="#8592a6"/>
    </linearGradient>
    <linearGradient id="${p}-dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#232f47"/><stop offset="1" stop-color="#141d30"/>
    </linearGradient>
    <linearGradient id="${p}-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5cb3f0"/><stop offset="1" stop-color="#1f6ba8"/>
    </linearGradient>
    <linearGradient id="${p}-counter" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8b96a8"/><stop offset="1" stop-color="#5c6a80"/>
    </linearGradient>
    <radialGradient id="${p}-plant" cx="35%" cy="30%" r="75%">
      <stop offset="0" stop-color="#4f9863"/><stop offset="1" stop-color="#2b5a3a"/>
    </radialGradient>
  </defs>`;
}
function svg(room, inner, vb='0 0 200 140'){
  return `<svg class="room-svg" viewBox="${vb}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    ${defs(room)}
    <rect x="0" y="0" width="${vb.split(' ')[2]}" height="${vb.split(' ')[3]}" fill="${FLOOR}"/>${inner}</svg>`;
}

const FURNITURE = {
  lavanderia: svg('lav', `
    <g filter="url(#lav-shadow)">
      <rect x="14" y="12" width="46" height="42" rx="8" fill="url(#lav-metal)"/>
      <circle cx="37" cy="34" r="13" fill="#1c2c46"/>
      <circle cx="37" cy="34" r="10" fill="#334867"/>
    </g>
    <g filter="url(#lav-shadow)">
      <rect x="66" y="12" width="40" height="42" rx="8" fill="url(#lav-metal)"/>
      <circle cx="86" cy="34" r="11" fill="#1c2c46"/>
      <circle cx="86" cy="34" r="8" fill="#334867"/>
    </g>
    <g filter="url(#lav-shadow)">
      <rect x="10" y="66" width="112" height="16" rx="4" fill="url(#lav-counter)"/>
    </g>`),

  cozinha: svg('coz', `
    <g filter="url(#coz-shadow)">
      <path d="M14 14 H150 V38 H60 V100 H14 Z" fill="url(#coz-counter)"/>
    </g>
    <circle cx="34" cy="26" r="6.5" fill="#1c2c46"/>
    <circle cx="56" cy="26" r="6.5" fill="#1c2c46"/>
    <g filter="url(#coz-shadow)"><rect x="100" y="16" width="34" height="18" rx="3" fill="url(#coz-metal)"/></g>
    <ellipse cx="34" cy="70" rx="9" ry="7" fill="#1c2c46"/>`),

  sala: svg('sal', `
    <g filter="url(#sal-shadow)">
      <rect x="14" y="84" width="120" height="32" rx="14" fill="url(#sal-fabric)"/>
      <rect x="20" y="88" width="26" height="14" rx="6" fill="#516289" opacity=".6"/>
      <rect x="50" y="88" width="26" height="14" rx="6" fill="#516289" opacity=".6"/>
      <rect x="80" y="88" width="26" height="14" rx="6" fill="#516289" opacity=".6"/>
      <rect x="110" y="88" width="20" height="14" rx="6" fill="#516289" opacity=".6"/>
    </g>
    <g filter="url(#sal-shadow)"><rect x="58" y="58" width="38" height="18" rx="5" fill="url(#sal-wood)"/></g>
    <g filter="url(#sal-shadow)"><rect x="20" y="8" width="64" height="8" rx="2" fill="url(#sal-dark)"/></g>`),

  garagem: svg('gar', `
    <g filter="url(#gar-shadow)">
      <rect x="70" y="18" width="56" height="104" rx="18" fill="url(#gar-metal)"/>
      <rect x="78" y="34" width="40" height="26" rx="8" fill="#1c2636"/>
      <rect x="78" y="82" width="40" height="18" rx="6" fill="#1c2636" opacity=".85"/>
      <rect x="66" y="34" width="9" height="18" rx="3" fill="#0f1622"/>
      <rect x="121" y="34" width="9" height="18" rx="3" fill="#0f1622"/>
      <rect x="66" y="92" width="9" height="18" rx="3" fill="#0f1622"/>
      <rect x="121" y="92" width="9" height="18" rx="3" fill="#0f1622"/>
    </g>`, '0 0 200 140'),

  felipe: svg('fel', `
    <g filter="url(#fel-shadow)">
      <rect x="14" y="14" width="70" height="54" rx="10" fill="url(#fel-linen)"/>
      <rect x="18" y="18" width="62" height="16" rx="7" fill="url(#fel-pillow)"/>
      <rect x="14" y="46" width="70" height="22" rx="8" fill="url(#fel-fabric)"/>
    </g>
    <g filter="url(#fel-shadow)"><rect x="94" y="14" width="16" height="16" rx="4" fill="url(#fel-wood)"/></g>
    <g filter="url(#fel-shadow)"><rect x="20" y="88" width="30" height="16" rx="4" fill="url(#fel-wood)"/></g>`),

  banheiro: svg('ban', `
    <g filter="url(#ban-shadow)">
      <ellipse cx="34" cy="88" rx="15" ry="11" fill="url(#ban-metal)"/>
      <rect x="24" y="66" width="20" height="18" rx="5" fill="url(#ban-metal)"/>
    </g>
    <g filter="url(#ban-shadow)"><rect x="70" y="16" width="46" height="82" rx="8" fill="url(#ban-water)" opacity=".55"/></g>`, '0 0 140 140'),

  milena: svg('mil', `
    <g filter="url(#mil-shadow)">
      <rect x="14" y="14" width="72" height="56" rx="10" fill="url(#mil-linen)"/>
      <rect x="18" y="18" width="64" height="17" rx="7" fill="url(#mil-pillow)"/>
      <rect x="14" y="48" width="72" height="22" rx="8" fill="url(#mil-fabric)"/>
    </g>
    <g filter="url(#mil-shadow)"><rect x="96" y="14" width="16" height="16" rx="4" fill="url(#mil-wood)"/></g>
    <ellipse cx="50" cy="100" rx="27" ry="9" fill="#2a3550" opacity=".5"/>`),

  suite: svg('sui', `
    <g filter="url(#sui-shadow)">
      <rect x="14" y="14" width="88" height="62" rx="10" fill="url(#sui-linen)"/>
      <rect x="18" y="18" width="80" height="18" rx="8" fill="url(#sui-pillow)"/>
      <rect x="14" y="50" width="88" height="26" rx="9" fill="url(#sui-fabric)"/>
    </g>
    <g filter="url(#sui-shadow)"><rect x="8" y="20" width="14" height="16" rx="4" fill="url(#sui-wood)"/></g>
    <g filter="url(#sui-shadow)"><rect x="92" y="20" width="14" height="16" rx="4" fill="url(#sui-wood)"/></g>
    <rect x="118" y="16" width="34" height="52" rx="6" fill="#1a2438" opacity=".55"/>`, '0 0 170 140'),

  quintal: svg('qui', `
    <g filter="url(#qui-shadow)">
      <rect x="14" y="14" width="84" height="56" rx="14" fill="url(#qui-water)"/>
      <rect x="22" y="22" width="68" height="40" rx="10" fill="#3a8fd6" opacity=".45"/>
    </g>
    <g filter="url(#qui-shadow)"><rect x="12" y="80" width="28" height="11" rx="4" fill="url(#qui-wood)"/></g>
    <g filter="url(#qui-shadow)"><rect x="46" y="80" width="28" height="11" rx="4" fill="url(#qui-wood)"/></g>
    <g filter="url(#qui-shadow)"><circle cx="112" cy="30" r="12" fill="url(#qui-plant)"/></g>
    <g filter="url(#qui-shadow)"><circle cx="112" cy="72" r="9" fill="url(#qui-plant)"/></g>`, '0 0 130 100'),
};
// Utilitários: relógio do topo e toast de feedback.
/* ============ RELÓGIO ============ */
function tick(){
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  document.getElementById('clockTime').textContent = `${hh}:${mm}`;
  const dias = ['dom','seg','ter','qua','qui','sex','sáb'];
  const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  document.getElementById('clockDate').textContent = `${now.getDate()} de ${['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'][now.getMonth()]}`;
}
tick(); setInterval(tick, 15000);

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 1800);
}
// Funções que desenham a planta, as cenas rápidas, os favoritos e o gráfico de energia,
// e as ações que alteram o estado (toggleRoomLight, applyScene).
/* ============ RENDER: PLANTA ============ */
function renderFloorplan(){
  const el = document.getElementById('floorplan');
  el.innerHTML = '';

  state.rooms.forEach(r=>{
    const div = document.createElement('div');
    div.className = 'room' + (r.light ? ' on' : '');
    div.dataset.room = r.id;
    div.innerHTML = FURNITURE[r.id] || '';

    let lines = '';
    if(r.id === 'garagem'){
      lines += `<div class="room-line ${r.gate==='fechado'?'state-good':''}">${ICON.lock}Portão ${r.gate}</div>`;
      lines += `<div class="room-line ${r.light?'state-on':''}">${ICON.bulb}Luz externa ${r.light?'acesa':'apagada'}</div>`;
    } else if(r.id === 'sala'){
      lines += `<div class="room-line ${r.light?'state-on':''}">${ICON.bulb}Luz ${r.light?'acesa':'apagada'}</div>`;
      lines += `<div class="room-line ${r.tv?'state-on':''}">${ICON.tv}TV ${r.tv?'ligada':'desligada'}</div>`;
    } else if(r.id === 'suite'){
      lines += `<div class="room-line state-on">${ICON.therm}Ar ${r.ac}°C</div>`;
      lines += `<div class="room-line ${r.light?'state-on':''}">${ICON.bulb}Luz ${r.light?'acesa':'apagada'}</div>`;
    } else if(r.id === 'quintal'){
      lines += `<div class="room-line ${r.cam==='online'?'state-good':''}">${ICON.cam}Câmera ${r.cam}</div>`;
      lines += `<div class="room-line ${r.irrigation?'state-on':''}">${ICON.drop}Irrigação ${r.irrigation?'ligada':'desligada'}</div>`;
    } else {
      lines += `<div class="room-line ${r.light?'state-on':''}">${ICON.bulb}Luz ${r.light?'acesa':'apagada'}</div>`;
    }
    if(r.id === 'garagem') div.innerHTML += ICON.car;
    div.innerHTML += `<div class="room-name">${r.name}</div>` + lines;
    div.addEventListener('click', ()=>toggleRoomLight(r.id));
    el.appendChild(div);
  });
}
function toggleRoomLight(id){
  const r = state.rooms.find(x=>x.id===id);
  if(!r) return;
  r.light = !r.light;
  renderFloorplan();
  showToast(`${r.name}: luz ${r.light ? 'ligada' : 'desligada'}`);
}

/* ============ RENDER: CENAS ============ */
function renderScenes(){
  const el = document.getElementById('scenesList');
  el.innerHTML = '';
  state.scenes.forEach(s=>{
    const btn = document.createElement('button');
    btn.className = `scene-btn ${s.cls}`;
    btn.innerHTML = `${ICON[s.icon]}<span>${s.label}</span>`;
    btn.addEventListener('click', ()=>applyScene(s));
    el.appendChild(btn);
  });
}
function applyScene(scene){
  if(scene.id==='boanoite'){
    state.rooms.forEach(r=>r.light=false);
    state.rooms.find(r=>r.id==='sala').tv=false;
  } else if(scene.id==='chegueiemcasa'){
    state.rooms.find(r=>r.id==='sala').light=true;
    state.rooms.find(r=>r.id==='garagem').light=true;
    state.rooms.find(r=>r.id==='garagem').gate='fechado';
  } else if(scene.id==='sairdecasa'){
    state.rooms.forEach(r=>{r.light=false; if(r.id==='sala')r.tv=false;});
    state.rooms.find(r=>r.id==='garagem').gate='fechado';
  } else if(scene.id==='fimdesemana'){
    state.rooms.find(r=>r.id==='sala').light=true;
    state.rooms.find(r=>r.id==='sala').tv=true;
  }
  renderFloorplan();
  showToast(`Cena aplicada: ${scene.label}`);
}

/* ============ RENDER: FAVORITOS ============ */
function renderFavorites(){
  const el = document.getElementById('favList');
  el.innerHTML = '';
  state.favorites.forEach(f=>{
    const row = document.createElement('div');
    row.className = 'fav-item';
    const right = f.link
      ? `<span class="fav-extra" style="color:var(--green)">${f.extra}</span>${ICON.chevron}`
      : (f.extra ? `<span class="fav-extra">${f.extra}</span>` : '') + `<button class="switch ${f.on?'on':''}" data-fav="${f.id}"></button>`;
    row.innerHTML = `
      <div class="fav-ic ${f.on?'active':''}">${ICON[f.type]}</div>
      <div class="fav-body"><div class="fav-name">${f.name}</div><div class="fav-room">${f.room}</div></div>
      ${right}`;
    el.appendChild(row);
  });
  el.querySelectorAll('.switch').forEach(sw=>{
    sw.addEventListener('click', (e)=>{
      e.stopPropagation();
      const f = state.favorites.find(x=>x.id===sw.dataset.fav);
      f.on = !f.on;
      renderFavorites();
      showToast(`${f.name}: ${f.on ? 'ligado' : 'desligado'}`);
    });
  });
}

/* ============ BARRAS DE ENERGIA (decorativo, gerado 1x) ============ */
function renderBars(){
  const el = document.getElementById('bars');
  el.innerHTML = '';
  const vals = [22,28,18,35,30,40,55,48,60,52,70,63,58,80,66,49,38,44];
  const max = Math.max(...vals);
  vals.forEach((v,i)=>{
    const bar = document.createElement('i');
    bar.style.height = (v/max*100)+'%';
    if(i===vals.length-3) bar.classList.add('hi');
    el.appendChild(bar);
  });
}
// Clima real (Open-Meteo — API pública, gratuita, sem chave/cadastro).
// Atualiza a cada 10 minutos com a temperatura/umidade/vento de Londrina, PR.
/* ============ CLIMA ============ */
const WEATHER_LAT = -23.31;
const WEATHER_LON = -51.16;
const WEATHER_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${WEATHER_LAT}&longitude=${WEATHER_LON}` +
  `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
  `&timezone=America%2FSao_Paulo`;

// Códigos WMO (padrão usado pelo Open-Meteo) -> descrição em PT-BR + categoria de ícone
const WEATHER_CODES = {
  0:  ['Céu limpo', 'sun'],
  1:  ['Principalmente limpo', 'sun'],
  2:  ['Parcialmente nublado', 'cloud'],
  3:  ['Nublado', 'cloud'],
  45: ['Névoa', 'cloud'], 48: ['Névoa com geada', 'cloud'],
  51: ['Garoa leve', 'rain'], 53: ['Garoa moderada', 'rain'], 55: ['Garoa forte', 'rain'],
  56: ['Garoa congelante', 'rain'], 57: ['Garoa congelante forte', 'rain'],
  61: ['Chuva leve', 'rain'], 63: ['Chuva moderada', 'rain'], 65: ['Chuva forte', 'rain'],
  66: ['Chuva congelante', 'rain'], 67: ['Chuva congelante forte', 'rain'],
  71: ['Neve leve', 'rain'], 73: ['Neve moderada', 'rain'], 75: ['Neve forte', 'rain'],
  77: ['Grãos de neve', 'rain'],
  80: ['Pancadas de chuva leves', 'rain'], 81: ['Pancadas de chuva', 'rain'], 82: ['Pancadas de chuva fortes', 'rain'],
  85: ['Pancadas de neve leves', 'rain'], 86: ['Pancadas de neve fortes', 'rain'],
  95: ['Trovoada', 'storm'], 96: ['Trovoada com granizo', 'storm'], 99: ['Trovoada com granizo forte', 'storm'],
};

const WEATHER_ICON_PATHS = {
  sun:   '<circle cx="12" cy="12" r="4.2"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke-linecap="round"/>',
  cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-2A5 5 0 0 0 7 19h10.5z"/>',
  rain:  '<path d="M17.5 15a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-2A5 5 0 0 0 7 15h10.5z"/><path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" stroke-linecap="round"/>',
  storm: '<path d="M17.5 13a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-2A5 5 0 0 0 7 13h10.5z"/><path d="M13 15l-3 5h3l-2 4" stroke-linecap="round" stroke-linejoin="round"/>',
};

async function updateWeather(){
  try{
    const res = await fetch(WEATHER_URL);
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const c = data.current;

    const [desc, icon] = WEATHER_CODES[c.weather_code] || ['Indisponível', 'cloud'];

    document.getElementById('wxTemp').textContent = `${Math.round(c.temperature_2m)}°C`;
    document.getElementById('wxDesc').textContent = desc;
    document.getElementById('wxHumidity').textContent = `${Math.round(c.relative_humidity_2m)}%`;
    document.getElementById('wxWind').textContent = `${Math.round(c.wind_speed_10m)} km/h`;

    const iconEl = document.getElementById('wxIcon');
    if(iconEl) iconEl.innerHTML = WEATHER_ICON_PATHS[icon];
  }catch(err){
    console.error('Não foi possível atualizar o clima:', err);
    // Mantém o último valor mostrado na tela em vez de quebrar a interface.
  }
}

updateWeather();
setInterval(updateWeather, 10 * 60 * 1000); // a cada 10 minutos
// Ligações de eventos gerais (navegação, microfone, câmeras) e inicialização da tela.
/* ============ NAV / MISC ============ */
document.getElementById('nav').addEventListener('click', (e)=>{
  const btn = e.target.closest('.nav-item');
  if(!btn) return;
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('pageTitle').textContent = btn.textContent.trim();
});
document.getElementById('micBtn').addEventListener('click', ()=>showToast('🎙️ Ouvindo... diga um comando'));
document.getElementById('verTodas').addEventListener('click', (e)=>{e.preventDefault(); showToast('Abrindo todas as câmeras...');});

/* ============ INIT ============ */
renderFloorplan();
renderScenes();
renderFavorites();
renderBars();
