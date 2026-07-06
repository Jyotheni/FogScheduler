import { useState } from 'react';
import { ALGORITHMS, ALGO_COLORS } from './data/algoData';

function ScoreBar({ label, value, accent }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:5, margin:'2px 0' }}>
      <div style={{ fontSize:8, color:'#C0B8D8', width:46, flexShrink:0 }}>{label}</div>
      <div style={{ flex:1, height:4, background:'#F0ECF8', borderRadius:2, overflow:'hidden' }}>
        <div style={{ height:'100%', width:`${value}%`, background:accent, borderRadius:2 }}/>
      </div>
      <div style={{ fontSize:8, fontFamily:"'DM Mono',monospace", color:'#9090B8', width:22, textAlign:'right' }}>{value}</div>
    </div>
  );
}

function AlgoCard({ a, c, isSel, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ background:isSel?c.bg:'#fff', border:`2px solid ${isSel?c.dark:'#EAE4F8'}`,
        borderRadius:12, padding:10, cursor:'pointer', transition:'all .2s',
        transform:(isSel||hovered)?'translateY(-2px)':'none',
        boxShadow:isSel?`0 4px 16px ${c.fill}88`:'0 1px 4px rgba(120,100,180,0.05)' }}>
      <div style={{ fontSize:11, fontWeight:800, color:c.dark }}>{a.name}</div>
      <div style={{ fontSize:8, fontFamily:"'DM Mono',monospace", color:'#C0B8D8', marginBottom:7 }}>{a.id} — {a.desc}</div>
      <ScoreBar label="latency" value={a.scores.latency} accent={c.fill}/>
      <ScoreBar label="energy"  value={a.scores.energy}  accent={c.fill}/>
      <ScoreBar label="qos"     value={a.scores.qos}     accent={c.fill}/>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3, marginTop:7 }}>
        {[['ms latency',a.latency],['fitness',a.fitness.toFixed(1)]].map(([lbl,val])=>(
          <div key={lbl} style={{ background:c.bg, borderRadius:6, padding:'3px 5px', textAlign:'center' }}>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:c.dark }}>{val}</div>
            <div style={{ fontSize:7, color:'#C0B8D8' }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AlgoCards({ selected, onSelect }) {
  return (
    <div style={{ marginBottom:8 }}>
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0', marginBottom:8 }}>
        Algorithm Benchmarks — click to update radar
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:7 }}>
        {ALGORITHMS.map((a,i)=>(
          <AlgoCard key={a.id} a={a} c={ALGO_COLORS[a.id]} isSel={i===selected} onClick={()=>onSelect(i)}/>
        ))}
      </div>
    </div>
  );
}