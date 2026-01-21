const brainrots = [
  { name: "Noobini Pizanini", base: 1, demand: 0.021, rarity: "common" },
  { name: "Lirili Larila", base: 3, demand: 0.042, rarity: "common" },
  { name: "Tim Cheese", base: 5, demand: 0.084, rarity: "common" },
  { name: "Fruli Frula", base: 7, demand: 0.25, rarity: "common" },
  { name: "Talpa Di Fero", base: 9, demand: 0.53, rarity: "common" },
  { name: "Svinina Bombardino", base: 10, demand: 0.78, rarity: "common" },
  { name: "Pipi Kiwi", base: 13, demand: 1.63, rarity: "common" },
  { name: "Pipi Corni", base: 14, demand: 25197291, rarity: "common" },
  { name: "Tripi Troppi", base: 15, demand: 3.45, rarity: "rare" },
  { name: "Gangster Footera", base: 30, demand: 10.2, rarity: "rare" },
  { name: "Banditto Bobbrito", base: 35, demand: 18.3, rarity: "rare" },
  { name: "Boneca Ambalabu", base: 40, demand: 20.4, rarity: "rare" },
  { name: "Cacto Hipopotamo", base: 50, demand: 34.2, rarity: "rare" },
  { name: "Ta Ta Ta Sahur", base: 55, demand: 41.8, rarity: "rare" },
  { name: "Tric Trac Baraboom", base: 65, demand: 58.32, rarity: "rare" },
  { name: "Pipi Avocado", base: 70, demand: 49195319, rarity: "rare" },
  { name: "Cappucino Assasino", base: 75, demand: 76.231, rarity: "epic" },
  { name: "Brr Brr Patapim", base: 100, demand: 124.311, rarity: "epic" },
  { name: "Avocadini Antilopini", base: 115, demand: 168.23, rarity: "epic" },
  { name: "Trulimero Trulicina", base: 125, demand: 184.2, rarity: "epic" },
  { name: "Bambini Crostini", base: 135, demand: 205.3, rarity: "epic" },
  { name: "Bananita Dolphinita", base: 150, demand: 224.5, rarity: "epic" },
  { name: "Perochello Lemonchello", base: 160, demand: 280.1, rarity: "epic" },
  { name: "Brri Brri Bicus Dicus Bombicus", base: 175, demand: 324.239, rarity: "epic" },
  { name: "Avocadini Guffo", base: 225, demand: 389.131, rarity: "epic" },
  { name: "Ti Ti Ti Sahur", base: 225, demand: 69195319, rarity: "epic" },
  { name: "Salamino Penguino", base: 250, demand: 423.67, rarity: "epic" },
  { name: "Wombo Rollo", base: 275, demand: 686.84, rarity: "epic" },
  { name: "Penguino Cocosino", base: 300, demand: 119195319, rarity: "epic" },
  { name: "Burbaloni Loliloli", base: 200, demand: 742.3, rarity: "legendary" },
  { name: "Chimpanzini Bananini", base: 300, demand: 1221.34, rarity: "legendary" },
  { name: "Ballerina Cappucina", base: 500, demand: 2593.358, rarity: "legendary" },
  { name: "Chef Crabracadabra", base: 600, demand: 5221.242, rarity: "legendary" },
  { name: "Lionel Cactuseli", base: 650, demand: 7424.2, rarity: "legendary" },
  { name: "Glorbo Fruttodrillo", base: 750, demand: 8242.1, rarity: "legendary" },
  { name: "Quivoli Ameleoni", base: 900, demand: 10136, rarity: "legendary" },
  { name: "Blueberrinni Octopusini", base: 1000, demand: 11013.274, rarity: "legendary" },
  { name: "Pipi Potato", base: 1100, demand: 12031, rarity: "legendary" },
  { name: "Strawberrelli Flamingelli", base: 1100, demand: 12031, rarity: "legendary" },
  { name: "Cocosini Mama", base: 1200, demand: 113000000, rarity: "legendary" },
  { name: "Pandaccini Bananini", base: 1250, demand: 13056, rarity: "legendary" },
  { name: "Sigma Boy", base: 1350, demand: 14002, rarity: "legendary" },
  { name: "Frigo Camelo", base: 1900, demand: 17007.1, rarity: "mythic" },
  { name: "Orangutini Ananassini", base: 2000, demand: 19258.5, rarity: "mythic" },
  { name: "Rhino Toasterino", base: 2100, demand: 20794, rarity: "mythic" },
  { name: "Bombardiro Crocodilo", base: 2500, demand: 23892, rarity: "mythic" },
  { name: "Bommodini Gusini", base: 5000, demand: 48021.191, rarity: "mythic" },
  { name: "Cavallo Virtuoso", base: 7500, demand: 67382.763, rarity: "mythic" },
  { name: "Gorillo Watermenodrillo", base: 8000, demand: 70783.429, rarity: "mythic" },
  { name: "Lerulerulerule", base: 8700, demand: 76452.6, rarity: "mythic" },
  { name: "Te Te Te Sahur", base: 9500, demand: 83548.924, rarity: "mythic" },
  { name: "Tracoducotulu Delapeladustuz", base: 12000, demand: 100134.284, rarity: "mythic" },
  { name: "Cachoritto Melonito", base: 13000, demand: 108232.63, rarity: "mythic" },
  { name: "Carloo", base: 13500, demand: 110000.78, rarity: "mythic" },
  { name: "Centrucci Nuclucci", base: 15500, demand: 119242.3241, rarity: "mythic" },
  { name: "Toiletto Focaccino", base: 16000, demand: 130104.24, rarity: "mythic" },
  { name: "Mythic Lucky Block", demand: 99242.1, rarity: "mythic" },
  { name: "Cocofanto Elefanto", base: 17500, demand: 167821.52, rarity: "brainrot-god" },
  { name: "Girafa Celestre", base: 20000, demand: 185221.42, rarity: "brainrot-god" },
  { name: "Chihuanini Taconini", base: 45000, demand: 190000, rarity: "brainrot-god" },
  { name: "Tralalero Tralala", base: 50000, demand: 205221, rarity: "brainrot-god" },
  { name: "Tigroligre Fruttoni", base: 600000, demand: 217242, rarity: "brainrot-god" },
  { name: "Odin Din Din Dun", base: 75000, demand: 245353.24, rarity: "brainrot-god" },
  { name: "Alessio", base: 85000, demand: 210000, rarity: "brainrot-god" },
  { name: "Orcalero Orcala", base: 100000, demand: 293210, rarity: "brainrot-god" },
  { name: "Tralalita Tralala", base: 100000, demand: 295630, rarity: "brainrot-god" },
  { name: "Trenostrutzzo Turbo 3000", base: 150000, demand: 320411.40, rarity: "brainrot-god" },
  { name: "Gattito Tacoto", base: 165000, demand: 300000, rarity: "brainrot-god" },
  { name: "Tripi Tropi Tropa Tripa", base: 175000, demand: 352131.23, rarity: "brainrot-god" },
  { name: "Ballerino Lololo", base: 200000, demand: 374431.42, rarity: "brainrot-god" },
  { name: "Bulbito Bandito Traktorito", base: 205000, demand: 424242.424, rarity: "brainrot-god" },
  { name: "Pakrahmatmamat", base: 215000, demand: 401402.491, rarity: "brainrot-god" },
  { name: "Los Bombinitos", base: 220000, demand: 405000.3, rarity: "brainrot-god" },
  { name: "Piccione Macchina", base: 225000, demand: 413424.242, rarity: "brainrot-god" },
  { name: "Tractoro Dinosauro", base: 230000, demand: 422131.592, rarity: "brainrot-god" },
  { name: "Los Orcalitos", base: 235000, demand: 432131.41, rarity: "brainrot-god" },
  { name: "Crabbo Limonetta", base: 235000, demand: 446700, rarity: "brainrot-god" },
  { name: "Cacasito Satolito", base: 240000, demand: 458291.193, rarity: "brainrot-god" },
  { name: "Tartaruga Cisterna", base: 250000, demand: 473514.42, rarity: "brainrot-god" },
  { name: "Mummy Ambalabu", base: 250000, demand: 650000, rarity: "brainrot-god" },
  { name: "Los Tipi Tacos", base: 260000, demand: 491000, rarity: "brainrot-god" },
  { name: "Mastodontico Telepiedone", base: 275000, demand: 507537.7, rarity: "brainrot-god" },
  { name: "Chrismasmamat", base: 277500, demand: 570000, rarity: "brainrot-god" },
  { name: "Cappuccino Clownino", base: 285000, demand: 700000, rarity: "brainrot-god" },
  { name: "Pop Pop Pop Sahur", base: 295000, demand: 683211.2, rarity: "brainrot-god" },
  { name: "Brainrot God Lucky Block", demand: 548119, rarity: "brainrot-god" },
  { name: "Los Matteos", base: 300000, demand: 601900, rarity: "secret" },
  { name: "La Vacca Saturno Saturnita", base: 300000, demand: 572832.52, rarity: "secret" },
  { name: "Jackorilla", base: 315000, demand: 1000000, rarity: "secret" },
  { name: "Torrtugini Dragonfruitini", base: 350000, demand: 648101.42, rarity: "secret" },
  { name: "Blackhole Goat", base: 400000, demand: 700000, rarity: "secret" },
  { name: "Los Spyderinis", base: 425000, demand: 734100, rarity: "secret" },
  { name: "Los Tralaleritos", base: 500000, demand: 850200, rarity: "secret" },
  { name: "Guerriro Digitale", base: 550000, demand: 1100000, rarity: "secret" },
  { name: "Yes my examine", base: 575000, demand: 917000, rarity: "secret" },
  { name: "Las Tralalaleritas", base: 650000, demand: 1100000, rarity: "secret" },
  { name: "Pumpkini Spyderini", base: 650000, demand: 2000000, rarity: "secret" },
  { name: "Job Job Job Sahur", base: 700000, demand: 1218000, rarity: "secret" },
  { name: "Las Vaquitas Saturnitas", base: 750000, demand: 1420000, rarity: "secret" },
  { name: "Trickolino", base: 900000, demand: 3400000, rarity: "secret" },
  { name: "Graipuss Medussi", base: 1000000, demand: 1920000, rarity: "secret" },
  { name: "1x1x1x1", base: 1100000, demand: 5595000, rarity: "secret" },
  { name: "Tung Tung Tung Sahur", base: 1500000, demand: 2580000, rarity: "secret" },
  { name: "Noo my examine", base: 1700000, demand: 3158220, rarity: "secret" },
  { name: "Telemorte", base: 2000000, demand: 7500000, rarity: "secret" },
  { name: "To To To Sahur", base: 2200000, demand: 3000000, rarity: "secret" },
  { name: "Pot Hotspot", base: 2500000, demand: 2891045, rarity: "secret" },
  { name: "Quesadilla Crocodila", base: 3000000, demand: 4000000, rarity: "secret" },
  { name: "Chicleteira Bicicleteira", base: 3500000, demand: 4652500, rarity: "secret" },
  { name: "Burrito Bandito", base: 4000000, demand: 4200000, rarity: "secret" },
  { name: "Los Nooo My Hotspositos", base: 5500000, demand: 4600000, rarity: "secret" },
  { name: "Los chicleteiras", base: 7000000, demand: 9250000, rarity: "secret" },
  { name: "67", base: 7500000, demand: 1000000, rarity: "secret" },
  { name: "La Grande Combinasion", base: 1000000, demand: 20650000, rarity: "secret" },
  { name: "Swag Soda", base: 13000000, demand: 189500000, rarity: "secret" },
  { name: "Nuclearo Dinosauro", base: 15000000, demand: 56700000, rarity: "secret" },
  { name: "Los Spooky Combinasions", base: 20000000, demand: 1200000, rarity: "secret" },
  { name: "Money Money Puggy", base: 21000000, demand: 109415000, rarity: "secret" },
  { name: "Los Mobilis", base: 22000000, demand: 90000000, rarity: "secret" },
  { name: "Los 67", base: 2250000, demand: 30000000, rarity: "secret" },
  { name: "Esok Sekolah", base: 30000000, demand: 107900000, rarity: "secret" },
  { name: "Tang Tang Keletang", base: 33500000, demand: 215694000, rarity: "secret" },
  { name: "Ketupat Kepat", base: 35000000, demand: 347500000, rarity: "secret" },
  { name: "Tictac Sahur", base: 37500000, demand: 565000000, rarity: "secret" },
  { name: "La Supreme Combinasion", base: 40000000, demand: 6750000000, rarity: "secret" },
  { name: "Ketchuru and Musturu", base: 42500000, demand: 750000000, rarity: "secret" },
  { name: "Garama and Madundung", base: 50000000, demand: 870000000, rarity: "secret" },
  { name: "Spaghetti Tualetti", base: 60000000, demand: 300000000, rarity: "secret" },
  { name: "La Casa Boo", base: 100000000, demand: 1200000000 },
  { name: "La Secret Combinasion", base: 125000000, demand: 600000000, rarity: "secret" },
  { name: "Burguro and Fruyoro", base: 150000000, demand: 1450000000, rarity: "secret" },
  { name: "Capitano Moby", base: 160000000, demand: 3600000000, rarity: "secret" },
  { name: "Dragon Canneloni", base: 200000000, demand: 4160000000, rarity: "secret" },
  { name: "Secret Lucky Block", demand: 900000, rarity: "secret" },
  { name: "Meowl", base: 400000000, demand: 2960000000, rarity: "og" },
  { name: "Strawberry Elephant", base: 500000000, demand: 7560000000, rarity: "og" }
];

const mutationMult = {
  Default: 1,
  Gold: 1.25,
  Diamond: 1.5,
  Bloodrot: 2,
  Candy: 4,
  Lava: 6,
  Galaxy: 7,
  YinYang: 7.5,
  Radioactive: 8.5,
  Rainbow: 10
};

const traitMult = {
  Strawberry: 8,
  Meowl: 7,
  Lightning: 6,
  Fireworks: 6,
  Nyan: 6,
  JackOLantern: 6,
  Paint: 6,
  Fire: 6,
  Rip: 5,
  Indonesia: 5,
  Sombrero: 5,
  RapConcert: 5,
  TungTungTungAttack: 5,
  Glitched: 5,
  Crab: 5,
  Tie: 4.75,
  MatteoHat: 4.5,
  WitchingHour: 4.5,
  TenBillionVisits: 4,
  Explosive: 4,
  Galactic: 4,
  Extinct: 4,
  Bubblegum: 4,
  Spider: 3.5,
  Rain: 3,
  Snowy: 3,
  Taco: 3,
  UFO: 3,
  None: 1
};

function populate(sel) {
  sel.innerHTML = '<option value="">Select Brainrot</option>';
  brainrots.forEach((b, i) => {
    const o = document.createElement("option");
    o.value = i;
    o.textContent = `${b.name} (${b.rarity})`;
    sel.appendChild(o);
  });
}

populate(ySelect);
populate(tSelect);


function preview(sel,val,dmd){
  const b=brainrots[sel.value];
  if(!b){val.value="";dmd.value="";return;}
  val.value=b.base.toLocaleString();
  dmd.value=b.demand.toLocaleString();
}
ySelect.onchange=()=>preview(ySelect,yValue,yDemand);
tSelect.onchange=()=>preview(tSelect,tValue,tDemand);


function addItem(side){
  const sel = side==="you"?ySelect:tSelect;
  if(sel.value==="") return;

  const b=brainrots[sel.value];
  const box=document.getElementById(side);
  box.classList.remove("empty");

  const data={base:b.base,demand:b.demand,mutation:null,traits:[]};

  const div=document.createElement("div");
  div.className="item";
  div.data=data;

  div.innerHTML=`
    <div class="item-title">${b.name}</div>
    <div class="item-meta">${b.rarity}</div>

    <div class="group-title">Mutation (one)</div>
    <div class="multi">
      ${Object.keys(mutationMult).map(m=>`<button onclick="setMutation(this,'${m}')">${m}</button>`).join("")}
    </div>

    <div class="group-title">Traits (multiple)</div>
    <div class="multi">
      ${Object.keys(traitMult).filter(t=>t!=="None").map(t=>`<button onclick="toggleTrait(this,'${t}')">${t}</button>`).join("")}
    </div>

    <button onclick="removeItem(this)">Remove</button>
  `;

  box.appendChild(div);

 
  sel.value="";
  if(side==="you"){yValue.value="";yDemand.value="";}
  else{tValue.value="";tDemand.value="";}

  recalc();
}

function setMutation(btn, mut) {
  const item = btn.closest(".item");
  item.querySelectorAll(".group-title + .multi button").forEach(b => b.classList.remove("active"));
  item.data.mutation = mut;
  btn.classList.add("active");
  recalc();
}

function toggleTrait(btn, t) {
  const d = btn.closest(".item").data;
  if (d.traits.includes(t)) {
    d.traits = d.traits.filter(x => x !== t);
    btn.classList.remove("active");
  } else {
    d.traits.push(t);
    btn.classList.add("active");
  }
  recalc();
}

function removeItem(btn) {
  const box = btn.closest(".items");
  btn.closest(".item").remove();
  if (!box.children.length) box.classList.add("empty");
  recalc();
}

function calc(d) {
  let v = d.base * d.demand;
  if (d.mutation) v *= mutationMult[d.mutation] || 1;
  d.traits.forEach(t => v *= traitMult[t] || 1);
  return v;
}

function recalc() {
  let y = 0, t = 0;
  [...you.children].forEach(i => y += calc(i.data));
  [...them.children].forEach(i => t += calc(i.data));
  yTotal.textContent = y.toLocaleString();
  tTotal.textContent = t.toLocaleString();
  diff.textContent = (y - t).toLocaleString();
  result.textContent = y > t ? "WIN" : y < t ? "LOSE" : y || t ? "FAIR" : "ADD ITEMS";
  result.className = "result " + (y > t ? "win" : y < t ? "lose" : "fair");
}

// ===== SAVE / LOAD =====
function saveTrade() {
  localStorage.setItem("trade", JSON.stringify({
    you: [...you.children].map(i => i.data),
    them: [...them.children].map(i => i.data)
  }));
}

function loadTrade() {
  const d = JSON.parse(localStorage.getItem("trade"));
  if (!d) return;
  clearTrade();
  d.you.forEach(x => spawn(x, "you"));
  d.them.forEach(x => spawn(x, "them"));
}

function spawn(d, side) {
  const box = document.getElementById(side);
  box.classList.remove("empty");
  const div = document.createElement("div");
  div.className = "item";
  div.data = d;
  div.innerHTML = `<div class="item-title">Saved Brainrot</div>`;
  box.appendChild(div);
  recalc();
}

function clearTrade() {
  you.innerHTML = "";
  them.innerHTML = "";
  you.classList.add("empty");
  them.classList.add("empty");
  recalc();
}