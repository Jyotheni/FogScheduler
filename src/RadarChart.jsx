import { ALGORITHMS, ALGO_COLORS } from './data/algoData';
const LABELS=['Latency','Energy','QoS','Makespan','Load Bal.'];
const N=LABELS.length, CX=110, CY=110, R=80;
function polar(angle,r){ const rad=(angle-90)*Math.PI/180; return { x:CX+r*Math.cos(rad), y:CY+r*Math.sin(rad) }; }
function poly(vals){ return vals.map((v,i)=>{ const {x,y}=polar((360/N)*i,(v/100)*R); return `${x},${y}`; }).join(' '); }

export default function RadarChart({ selectedIdx }) {
  const a=ALGORITHMS[selectedIdx], c=ALGO_COLORS[a.id];
  const scores=Object.values(a.scores);
  return (
    <div style={{ background:'#fff', border:'1px solid #EAE4F8', borderRadius:14, padding:14, boxShadow:'0 2px 8px rgba(120,100,180,0.06)' }}>
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0', marginBottom:8 }}>
        Radar — <span style={{ color:c.dark }}>{a.id}</span>
      </div>
      <svg width="100%" viewBox="0 0 220 220">
        {[25,50,75,100].map(r=><polygon key={r} points={poly([r,r,r,r,r])} fill="none" stroke="#EAE4F8" strokeWidth="0.8"/>)}
        {LABELS.map((_,i)=>{ const {x,y}=polar((360/N)*i,R); return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="#EAE4F8" strokeWidth="0.8"/>; })}
        <polygon points={poly([50,48,52,55,50])} fill={`${c.fill}22`} stroke="#D4CCF0" strokeWidth="1" strokeDasharray="4 3"/>
        <polygon points={poly(scores)} fill={`${c.fill}55`} stroke={c.dark} strokeWidth="2"/>
        {scores.map((v,i)=>{ const {x,y}=polar((360/N)*i,(v/100)*R); return <circle key={i} cx={x} cy={y} r={3} fill={c.fill} stroke={c.dark} strokeWidth="1.5"/>; })}
        {LABELS.map((lbl,i)=>{ const {x,y}=polar((360/N)*i,R+16); const anchor=x<CX-5?'end':x>CX+5?'start':'middle'; return <text key={i} x={x} y={y} textAnchor={anchor} fontSize="8" fill="#9090B8" fontFamily="Nunito">{lbl}</text>; })}
      </svg>
      <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:4, fontSize:9, color:'#9090B8' }}>
          <div style={{ width:18, height:3, borderRadius:2, background:c.dark }}/>{a.id}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:4, fontSize:9, color:'#9090B8' }}>
          <div style={{ width:18, height:3, background:'none', border:'1px dashed #D4CCF0' }}/>Baseline
        </div>
      </div>
    </div>
  );
}