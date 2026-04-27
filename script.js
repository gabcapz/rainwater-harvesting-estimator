/* ── DATA ── */
const CITIES=[{"city":"Mumbai","annual_rainfall_mm":2167,"surface_runoff_coefficient":0.8,"roof_material":"terracotta","monthly_rainfall_mm":{"Jan":1.9,"Feb":1.9,"Mar":3.8,"Apr":1.9,"May":34.4,"Jun":200.8,"Jul":531.7,"Aug":589.1,"Sep":455.2,"Oct":233.3,"Nov":91.8,"Dec":21.0}},{"city":"Delhi","annual_rainfall_mm":617,"surface_runoff_coefficient":0.85,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":18.4,"Feb":19.3,"Mar":13.5,"Apr":6.8,"May":10.6,"Jun":56.1,"Jul":173.1,"Aug":169.2,"Sep":119.0,"Oct":15.5,"Nov":5.8,"Dec":9.7}},{"city":"Chennai","annual_rainfall_mm":1400,"surface_runoff_coefficient":0.75,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":38.5,"Feb":28.6,"Mar":14.3,"Apr":16.5,"May":24.2,"Jun":46.2,"Jul":96.7,"Aug":134.1,"Sep":134.1,"Oct":333.0,"Nov":381.3,"Dec":152.7}},{"city":"Kolkata","annual_rainfall_mm":1582,"surface_runoff_coefficient":0.8,"roof_material":"terracotta","monthly_rainfall_mm":{"Jan":2.6,"Feb":2.6,"Mar":5.3,"Apr":13.1,"May":52.6,"Jun":210.2,"Jul":473.0,"Aug":420.5,"Sep":262.8,"Oct":105.1,"Nov":26.3,"Dec":7.9}},{"city":"Bengaluru","annual_rainfall_mm":971,"surface_runoff_coefficient":0.8,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.6,"Feb":1.6,"Mar":3.2,"Apr":8.1,"May":32.3,"Jun":129.0,"Jul":290.3,"Aug":258.1,"Sep":161.3,"Oct":64.5,"Nov":16.1,"Dec":4.8}},{"city":"Hyderabad","annual_rainfall_mm":812,"surface_runoff_coefficient":0.82,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.3,"Feb":1.3,"Mar":2.7,"Apr":6.7,"May":27.0,"Jun":107.9,"Jul":242.8,"Aug":215.8,"Sep":134.9,"Oct":54.0,"Nov":13.5,"Dec":4.0}},{"city":"Pune","annual_rainfall_mm":722,"surface_runoff_coefficient":0.78,"roof_material":"metal","monthly_rainfall_mm":{"Jan":1.2,"Feb":1.2,"Mar":2.4,"Apr":6.0,"May":24.0,"Jun":95.9,"Jul":215.9,"Aug":191.9,"Sep":119.9,"Oct":48.0,"Nov":12.0,"Dec":3.6}},{"city":"Ahmedabad","annual_rainfall_mm":782,"surface_runoff_coefficient":0.83,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.3,"Feb":1.3,"Mar":2.6,"Apr":6.5,"May":26.0,"Jun":103.9,"Jul":233.8,"Aug":207.8,"Sep":129.9,"Oct":52.0,"Nov":13.0,"Dec":3.9}},{"city":"Jaipur","annual_rainfall_mm":650,"surface_runoff_coefficient":0.85,"roof_material":"terracotta","monthly_rainfall_mm":{"Jan":1.1,"Feb":1.1,"Mar":2.2,"Apr":5.4,"May":21.6,"Jun":86.4,"Jul":194.4,"Aug":172.8,"Sep":108.0,"Oct":43.2,"Nov":10.8,"Dec":3.2}},{"city":"Bhopal","annual_rainfall_mm":1146,"surface_runoff_coefficient":0.79,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.9,"Feb":1.9,"Mar":3.8,"Apr":9.5,"May":38.1,"Jun":152.3,"Jul":342.7,"Aug":304.6,"Sep":190.4,"Oct":76.1,"Nov":19.0,"Dec":5.7}},{"city":"Kochi","annual_rainfall_mm":3000,"surface_runoff_coefficient":0.72,"roof_material":"metal","monthly_rainfall_mm":{"Jan":5.0,"Feb":5.0,"Mar":10.0,"Apr":24.9,"May":99.7,"Jun":398.7,"Jul":897.0,"Aug":797.3,"Sep":498.3,"Oct":199.3,"Nov":49.8,"Dec":15.0}},{"city":"Guwahati","annual_rainfall_mm":1600,"surface_runoff_coefficient":0.75,"roof_material":"metal","monthly_rainfall_mm":{"Jan":2.7,"Feb":2.7,"Mar":5.3,"Apr":13.3,"May":53.2,"Jun":212.6,"Jul":478.4,"Aug":425.2,"Sep":265.8,"Oct":106.3,"Nov":26.6,"Dec":8.0}},{"city":"Bhubaneswar","annual_rainfall_mm":1542,"surface_runoff_coefficient":0.78,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":2.6,"Feb":2.6,"Mar":5.1,"Apr":12.8,"May":51.2,"Jun":204.9,"Jul":461.1,"Aug":409.8,"Sep":256.1,"Oct":102.5,"Nov":25.6,"Dec":7.7}},{"city":"Nagpur","annual_rainfall_mm":1205,"surface_runoff_coefficient":0.81,"roof_material":"terracotta","monthly_rainfall_mm":{"Jan":2.0,"Feb":2.0,"Mar":4.0,"Apr":10.0,"May":40.0,"Jun":160.1,"Jul":360.3,"Aug":320.3,"Sep":200.2,"Oct":80.1,"Nov":20.0,"Dec":6.0}},{"city":"Thiruvananthapuram","annual_rainfall_mm":1891,"surface_runoff_coefficient":0.74,"roof_material":"metal","monthly_rainfall_mm":{"Jan":3.1,"Feb":3.1,"Mar":6.3,"Apr":15.7,"May":62.8,"Jun":251.3,"Jul":565.4,"Aug":502.6,"Sep":314.1,"Oct":125.6,"Nov":31.4,"Dec":9.4}},{"city":"Lucknow","annual_rainfall_mm":890,"surface_runoff_coefficient":0.82,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.5,"Feb":1.5,"Mar":3.0,"Apr":7.4,"May":29.6,"Jun":118.3,"Jul":266.1,"Aug":236.5,"Sep":147.8,"Oct":59.1,"Nov":14.8,"Dec":4.4}},{"city":"Patna","annual_rainfall_mm":1000,"surface_runoff_coefficient":0.8,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.7,"Feb":1.7,"Mar":3.3,"Apr":8.3,"May":33.2,"Jun":132.9,"Jul":299.0,"Aug":265.8,"Sep":166.1,"Oct":66.4,"Nov":16.6,"Dec":5.0}},{"city":"Chandigarh","annual_rainfall_mm":1085,"surface_runoff_coefficient":0.83,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.8,"Feb":1.8,"Mar":3.6,"Apr":9.0,"May":36.0,"Jun":144.2,"Jul":324.4,"Aug":288.4,"Sep":180.2,"Oct":72.1,"Nov":18.0,"Dec":5.4}},{"city":"Visakhapatnam","annual_rainfall_mm":1032,"surface_runoff_coefficient":0.79,"roof_material":"metal","monthly_rainfall_mm":{"Jan":1.7,"Feb":1.7,"Mar":3.4,"Apr":8.6,"May":34.3,"Jun":137.1,"Jul":308.6,"Aug":274.3,"Sep":171.4,"Oct":68.6,"Nov":17.1,"Dec":5.1}},{"city":"Indore","annual_rainfall_mm":900,"surface_runoff_coefficient":0.81,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.5,"Feb":1.5,"Mar":3.0,"Apr":7.5,"May":29.9,"Jun":119.6,"Jul":269.1,"Aug":239.2,"Sep":149.5,"Oct":59.8,"Nov":15.0,"Dec":4.5}},{"city":"Coimbatore","annual_rainfall_mm":700,"surface_runoff_coefficient":0.77,"roof_material":"concrete","monthly_rainfall_mm":{"Jan":1.2,"Feb":1.2,"Mar":2.3,"Apr":5.8,"May":23.3,"Jun":93.0,"Jul":209.3,"Aug":186.0,"Sep":116.3,"Oct":46.5,"Nov":11.6,"Dec":3.5}},{"city":"Dehradun","annual_rainfall_mm":2073,"surface_runoff_coefficient":0.76,"roof_material":"metal","monthly_rainfall_mm":{"Jan":3.4,"Feb":3.4,"Mar":6.9,"Apr":17.2,"May":68.9,"Jun":275.5,"Jul":619.8,"Aug":551.0,"Sep":344.4,"Oct":137.7,"Nov":34.4,"Dec":10.3}},{"city":"Ranchi","annual_rainfall_mm":1430,"surface_runoff_coefficient":0.79,"roof_material":"metal","monthly_rainfall_mm":{"Jan":2.4,"Feb":2.4,"Mar":4.8,"Apr":11.9,"May":47.5,"Jun":190.0,"Jul":427.6,"Aug":380.1,"Sep":237.5,"Oct":95.0,"Nov":23.8,"Dec":7.1}},{"city":"Raipur","annual_rainfall_mm":1344,"surface_runoff_coefficient":0.8,"roof_material":"terracotta","monthly_rainfall_mm":{"Jan":2.2,"Feb":2.2,"Mar":4.5,"Apr":11.2,"May":44.7,"Jun":178.6,"Jul":401.9,"Aug":357.2,"Sep":223.3,"Oct":89.3,"Nov":22.3,"Dec":6.7}},{"city":"Jodhpur","annual_rainfall_mm":362,"surface_runoff_coefficient":0.87,"roof_material":"terracotta","monthly_rainfall_mm":{"Jan":0.6,"Feb":0.6,"Mar":1.2,"Apr":3.0,"May":12.0,"Jun":48.1,"Jul":108.2,"Aug":96.2,"Sep":60.1,"Oct":24.1,"Nov":6.0,"Dec":1.8}}];
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const ROOF_RC={concrete:0.80,terracotta:0.75,metal:0.90};
const CLIMATE={Mumbai:'Tropical Wet',Delhi:'Semi-Arid',Chennai:'Tropical Wet-Dry',Kolkata:'Tropical Wet',Bengaluru:'Tropical Savanna',Hyderabad:'Semi-Arid',Pune:'Semi-Arid',Ahmedabad:'Hot Arid',Jaipur:'Hot Semi-Arid',Bhopal:'Tropical Wet-Dry',Kochi:'Tropical Wet',Guwahati:'Subtropical',Bhubaneswar:'Tropical Wet-Dry',Nagpur:'Tropical Wet-Dry',Thiruvananthapuram:'Tropical Wet',Lucknow:'Semi-Arid',Patna:'Semi-Arid',Chandigarh:'Semi-Arid',Visakhapatnam:'Tropical',Indore:'Semi-Arid',Coimbatore:'Tropical',Dehradun:'Subtropical',Ranchi:'Subtropical',Raipur:'Tropical Wet-Dry',Jodhpur:'Hot Arid'};


/* populate city dropdown */
const sel=document.getElementById('citySelect');
CITIES.forEach(c=>{const o=document.createElement('option');o.value=c.city;o.textContent=c.city+' ('+c.annual_rainfall_mm+' mm/yr)';sel.appendChild(o);});


/* ── NAVIGATION ── */
function goHome(e){e&&e.preventDefault();document.getElementById('home').style.display='flex';document.getElementById('about').style.display='none';document.getElementById('navHome').classList.add('active');document.getElementById('navAbout').classList.remove('active');window.scrollTo({top:0,behavior:'smooth'});}
function goAbout(e){e&&e.preventDefault();document.getElementById('home').style.display='none';document.getElementById('about').style.display='flex';document.getElementById('navAbout').classList.add('active');document.getElementById('navHome').classList.remove('active');window.scrollTo({top:0,behavior:'smooth'});}


/* ── THEME ── */
document.getElementById('themeBtn').addEventListener('click',()=>{
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('themeBtn').textContent=dark?'🌙':'☀️';
  if(lastSim)drawChart(lastSim);
});


/* ── CITY CHIPS ── */
sel.addEventListener('change',()=>{
  const city=CITIES.find(c=>c.city===sel.value);
  if(!city){document.getElementById('cityChips').style.display='none';return;}
  document.getElementById('cityChips').style.display='grid';
  document.getElementById('ch-rain').textContent=city.annual_rainfall_mm+' mm';
  document.getElementById('ch-runoff').textContent=city.surface_runoff_coefficient;
  document.getElementById('ch-roof').textContent=city.roof_material.charAt(0).toUpperCase()+city.roof_material.slice(1);
  document.getElementById('ch-climate').textContent=CLIMATE[city.city]||'Tropical';
  document.getElementById('roofMat').value=city.roof_material;
});


/* ── VALIDATION ── */
function validate(){
  let ok=true;
  const roofEl=document.getElementById('roofArea');
  const tankEl=document.getElementById('tankSize');
  const errRoof=document.getElementById('err-roof');
  const errTank=document.getElementById('err-tank');
  const roofV=+roofEl.value, tankV=+tankEl.value;


  if(!roofV||roofV<1||roofV>5000){roofEl.classList.add('error');errRoof.classList.add('show');ok=false;}
  else{roofEl.classList.remove('error');errRoof.classList.remove('show');}


  if(!tankV||tankV<100||tankV>500000){tankEl.classList.add('error');errTank.classList.add('show');ok=false;}
  else{tankEl.classList.remove('error');errTank.classList.remove('show');}


  if(!sel.value){sel.classList.add('error');ok=false;}
  else{sel.classList.remove('error');}
  return ok;
}
['roofArea','tankSize'].forEach(id=>document.getElementById(id).addEventListener('input',()=>validate()));


/* ── SIMULATION ── */
function simulate(city,roofArea,tankCap,rc){
  let tank=0;
  return MONTHS.map(m=>{
    const rain=city.monthly_rainfall_mm[m];
    const inflow=rain*roofArea*rc;
    const raw=tank+inflow;
    const overflow=Math.max(0,raw-tankCap);
    const filled=Math.min(raw,tankCap);
    tank=filled;
    return{month:m,rain,inflow,overflow,tankEnd:tank};
  });
}
function findOptimal(city,roofArea,rc){
  const sizes=[500,1000,2000,3000,5000,8000,10000,15000,20000,50000];
  let best=null,bestScore=Infinity;
  sizes.forEach(sz=>{
    const r=simulate(city,roofArea,sz,rc);
    const score=r.reduce((a,m)=>a+m.overflow*0.5,0);
    const dryMonths=r.filter(m=>m.tankEnd===0&&m.inflow===0).length;
    const s=score+dryMonths*500;
    if(s<bestScore){bestScore=s;best=sz;}
  });
  return best;
}


let chart=null,lastSim=null;


document.getElementById('calcBtn').addEventListener('click',()=>{
  if(!validate())return;
  const city=CITIES.find(c=>c.city===sel.value);
  const roofArea=+document.getElementById('roofArea').value;
  const tankCap=+document.getElementById('tankSize').value;
  const rc=ROOF_RC[document.getElementById('roofMat').value]||0.80;
  const WATER_COST=8; // ₹8 per 1000L fixed


  const sim=simulate(city,roofArea,tankCap,rc);
  lastSim=sim;


  const totInflow=sim.reduce((a,m)=>a+m.inflow,0);
  const totOverflow=sim.reduce((a,m)=>a+m.overflow,0);
  const totHarvested=totInflow-totOverflow;
  const dryMonths=sim.filter(m=>m.tankEnd<1&&m.inflow<1).length;
  const savings=(totHarvested/1000)*WATER_COST;


  document.getElementById('r-harvested').textContent=Math.round(totHarvested).toLocaleString('en-IN')+' L';
  document.getElementById('r-savings').textContent='₹'+Math.round(savings).toLocaleString('en-IN');
  document.getElementById('r-shortfall').textContent=dryMonths;
  document.getElementById('r-overflow').textContent=Math.round(totOverflow).toLocaleString('en-IN')+' L';


  const opt=findOptimal(city,roofArea,rc);
  const optSim=simulate(city,roofArea,opt,rc);
  const optHarvest=optSim.reduce((a,m)=>a+m.inflow-m.overflow,0);
  const optSave=(optHarvest/1000)*WATER_COST;
  const rec=document.getElementById('recText');
  const fmtL=n=>n>=1000?(n/1000).toFixed(n%1000===0?0:1)+'K':String(n);
  if(opt===tankCap){
    rec.innerHTML=`Your <span class="rec-hl">${fmtL(tankCap)} L</span> tank is already the optimal size for ${city.city} with a <span class="rec-hl">${roofArea} m²</span> ${document.getElementById('roofMat').options[document.getElementById('roofMat').selectedIndex].text.split(' ')[0]} roof. You can harvest approx. <span class="rec-hl">₹${Math.round(savings).toLocaleString('en-IN')}/year</span> in savings.`;
  } else {
    rec.innerHTML=`For <span class="rec-hl">${city.city}</span> with a <span class="rec-hl">${roofArea} m²</span> roof, the optimal tank size is <span class="rec-hl">${fmtL(opt)} L</span>. That could harvest <span class="rec-hl">${Math.round(optHarvest).toLocaleString('en-IN')} L/year</span> and save approx. <span class="rec-hl">₹${Math.round(optSave).toLocaleString('en-IN')}</span> — ${opt>tankCap?'consider <strong>upgrading</strong> to a larger tank':'a <strong>smaller tank</strong> may actually reduce overflow waste'}.`;
  }


  drawChart(sim);
  drawTable(sim);


  document.getElementById('placeholder').style.display='none';
  const ra=document.getElementById('results-area');
  ra.style.display='flex';
});


function drawChart(sim){
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  const grid=dark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.07)';
  const tc=dark?'#64748b':'#8590a6';
  const tbg=dark?'#111827':'#ffffff';
  if(chart)chart.destroy();
  chart=new Chart(document.getElementById('mainChart'),{
    type:'line',
    data:{
      labels:sim.map(m=>m.month),
      datasets:[
        {label:'Tank Level (L)',data:sim.map(m=>Math.round(m.tankEnd)),borderColor:'#4f8ef7',backgroundColor:'rgba(79,142,247,0.1)',fill:true,tension:0.4,borderWidth:2.5,pointBackgroundColor:'#4f8ef7',pointRadius:4,pointHoverRadius:7},
        {label:'Inflow (L)',data:sim.map(m=>Math.round(m.inflow)),borderColor:'#00c896',backgroundColor:'rgba(0,200,150,0.07)',fill:true,tension:0.4,borderWidth:2,pointBackgroundColor:'#00c896',pointRadius:3,pointHoverRadius:6},
        {label:'Overflow (L)',data:sim.map(m=>Math.round(m.overflow)),borderColor:'#ef5350',backgroundColor:'rgba(239,83,80,0.07)',fill:true,tension:0.4,borderWidth:2,borderDash:[5,3],pointBackgroundColor:'#ef5350',pointRadius:3,pointHoverRadius:6}
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:false},tooltip:{backgroundColor:tbg,borderColor:'rgba(79,142,247,0.25)',borderWidth:1,titleColor:tc,bodyColor:tc,padding:12,callbacks:{label:c=>` ${c.dataset.label}: ${c.parsed.y.toLocaleString('en-IN')} L`}}},
      scales:{x:{grid:{color:grid},ticks:{color:tc,font:{family:'Poppins',size:11}}},y:{grid:{color:grid},ticks:{color:tc,font:{family:'Poppins',size:11},callback:v=>v>=1000?(v/1000).toFixed(0)+'K':v}}}
    }
  });
}


function drawTable(sim){
  document.getElementById('monthlyTbody').innerHTML=sim.map(m=>{
    let tag,lbl;
    if(m.overflow>0){tag='tag-over';lbl='Overflow';}
    else if(m.tankEnd<1&&m.inflow<1){tag='tag-dry';lbl='Dry';}
    else{tag='tag-ok';lbl='Filling';}
    return`<tr>
      <td><strong>${m.month}</strong></td>
      <td>${m.rain.toFixed(1)}</td>
      <td>${Math.round(m.inflow).toLocaleString('en-IN')}</td>
      <td>${Math.round(m.tankEnd).toLocaleString('en-IN')}</td>
      <td>${Math.round(m.overflow).toLocaleString('en-IN')}</td>
      <td><span class="tag ${tag}">${lbl}</span></td>
    </tr>`;
  }).join('');
}

