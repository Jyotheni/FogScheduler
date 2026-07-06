export const ALGO_COLORS = {
  PSO:    { fill: '#A8D8EA', dark: '#3A7D9A', bg: '#EAF6FB' },
  GWO:    { fill: '#C3B1E1', dark: '#6B4EA0', bg: '#F0EAFB' },
  WOA:    { fill: '#F9C6CE', dark: '#B84460', bg: '#FEF0F2' },
  ACO:    { fill: '#FFD6A5', dark: '#A06B10', bg: '#FFF6E8' },
  GA:     { fill: '#B5EAD7', dark: '#2E8A60', bg: '#E8FAF3' },
  HYBRID: { fill: '#FFB7B2', dark: '#B03A35', bg: '#FFF0EF' },
};

export const ALGORITHMS = [
  { id:'PSO',    name:'Particle Swarm', desc:'Velocity-based swarm',
    fitness:54.83, latency:210.0, energy:0.370, qos:56, loadBalance:0.474,
    scores:{ latency:72, energy:74, makespan:70, loadBalance:74, qos:56 },
    curve:[100,88,76,66,57,50,45,40,36,32,29,26,24,22,21,20,19,18,17,17] },
  { id:'GWO',    name:'Grey Wolf',      desc:'α-β-δ wolf hierarchy',
    fitness:40.36, latency:99.3,  energy:0.376, qos:80, loadBalance:0.512,
    scores:{ latency:84, energy:82, makespan:88, loadBalance:85, qos:80 },
    curve:[100,90,80,70,60,52,45,39,34,29,25,22,19,17,15,14,13,12,11,10] },
  { id:'WOA',    name:'Whale Opt.',     desc:'Bubble-net hunting',
    fitness:37.89, latency:88.3,  energy:0.029, qos:75, loadBalance:0.231,
    scores:{ latency:88, energy:97, makespan:74, loadBalance:78, qos:75 },
    curve:[100,89,79,70,61,53,46,40,35,30,26,23,20,18,16,15,14,13,12,11] },
  { id:'ACO',    name:'Ant Colony',     desc:'Pheromone trail paths',
    fitness:60.82, latency:143.4, energy:0.387, qos:60, loadBalance:0.272,
    scores:{ latency:78, energy:76, makespan:92, loadBalance:88, qos:60 },
    curve:[100,94,88,82,76,70,65,60,55,51,48,45,42,40,38,36,35,34,33,33] },
  { id:'GA',     name:'Genetic Alg.',   desc:'Crossover + mutation',
    fitness:43.99, latency:102.8, energy:0.337, qos:69, loadBalance:0.432,
    scores:{ latency:80, energy:80, makespan:86, loadBalance:82, qos:69 },
    curve:[100,92,85,78,72,66,61,57,53,49,46,43,41,39,37,36,35,34,33,33] },
  { id:'HYBRID', name:'PSO+GWO',        desc:'Lévy flight hybrid',
    fitness:56.70, latency:133.9, energy:0.335, qos:66, loadBalance:0.496,
    scores:{ latency:82, energy:82, makespan:88, loadBalance:83, qos:66 },
    curve:[100,88,76,65,55,46,38,31,25,21,17,14,12,10,9,8,7.5,7,6.8,6.5] },
];

export const FOG_NODES = [
  { id:'FN-01', loc:'Edge-North',   cpu:88, tasks:12, status:'busy'   },
  { id:'FN-02', loc:'Edge-South',   cpu:62, tasks:8,  status:'active' },
  { id:'FN-03', loc:'Edge-East',    cpu:45, tasks:5,  status:'active' },
  { id:'FN-04', loc:'Edge-West',    cpu:93, tasks:15, status:'busy'   },
  { id:'FN-05', loc:'Edge-Central', cpu:24, tasks:3,  status:'active' },
];

export const LOG_EVENTS = [
  { tag:'TASK',  msg:'Task #2841 dispatched to FN-02 via GWO',        color:'#6B4EA0' },
  { tag:'OPT',   msg:'WOA bubble-net iter 38: fitness=37.89',         color:'#B84460' },
  { tag:'SCHED', msg:'FN-04 overload - migrating 3 tasks to FN-03',   color:'#A06B10' },
  { tag:'TASK',  msg:'Task #2842 to Cloud-VM-07 (latency critical)',   color:'#3A7D9A' },
  { tag:'OPT',   msg:'GWO alpha wolf position updated',                color:'#6B4EA0' },
  { tag:'WARN',  msg:'FN-01 CPU above 88% - rebalancing triggered',   color:'#B84460' },
  { tag:'TASK',  msg:'Task #2843 to FN-02 (energy-optimal path)',      color:'#3A7D9A' },
  { tag:'OPT',   msg:'Hybrid PSO+GWO Levy flight perturbation fired', color:'#B03A35' },
  { tag:'NET',   msg:'Fog to Cloud RTT: 9.2ms',                       color:'#2E8A60' },
  { tag:'SCHED', msg:'Pareto front: 12 non-dominated solutions',       color:'#2E8A60' },
];