let P = [] //dari solve
let t = [] //dari solve
let r; //materi:input user
let K = 100; //tugas : r dan k input user

//bisa diinput
let P0 = 20;
let dt = 0.1;
let tMax = 10;

let grafik; //chart js
function setup() {
  createCanvas(400, 100);
  r = createInput('0.8'); //input default
  r.position(20,0);
  let p = createP('Konstanta Pertumbuhan'); //teks biasa
  p.style('fontsize', "14px");
  p.position(20,0);
  
  solve(); //jalankan dulu sblm inisiasi
  r.changed(solve);
  
  grafik = new Chart(this, config);
}

function draw() {
  background(220);
  grafik.update();
}

function solve(){
  P[0] = P0;
  t[0] = 0;
  let rs = float(r.value());
  let iterNum = int(tMax/dt);
  
  for (i=0; i<iterNum; i++){
    P[i+1] = P[i] + dt * rs* P[i]*(1 - P[i]/K)
    t[i+1] = (i+1)*dt;
  }
}