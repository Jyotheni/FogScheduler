import { useState, useEffect } from 'react';

function KpiCard({ label, value, unit, delta, deltaGood, accent, darkAccent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ background:'#fff', border:'1px solid #EAE4F8', borderRadius:14,
        padding:'12px 16px', position:'relative', overflow:'hidden', cursor:'pointer',
        transition:'transform .15s, box-shadow .15s',
        transform: hovered?'translateY(-2px)':'none',
        boxShadow: hovered?'0 8px 24px rgba(120,100,180,0.12)':'0 2px 8px rgba(120,100,180,0.06)' }}>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:accent }} />
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.3, textTransform:'uppercase', color:'#B0A8D0', marginBottom:6 }}>{label}</div>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:26, fontWeight:500, color:darkAccent, lineHeight:1 }}>
        {value}<span style={{ fontSize:13, fontWeight:400 }}> {unit}</span>
      </div>
      <div style={{ display:'inline-flex', fontSize:9, fontWeight:700, padding:'2px 7px',
        borderRadius:8, marginTop:6,
        background: deltaGood?'#E8F8EE':'#FFF0EF',
        color: deltaGood?'#3A9A6A':'#B84460' }}>{delta}</div>
    </div>
  );
}

export default function KpiRow() {
  const [vals, setVals] = useState({ lat:'88.3', en:'0.029', qos:'75', lb:'0.231' });
  useEffect(() => {
    const id = setInterval(() => {
      setVals({
        lat: (88.3*(1+(Math.random()-.5)*.05)).toFixed(1),
        en:  (0.029*(1+(Math.random()-.5)*.04)).toFixed(3),
        qos: String(Math.round(75+(Math.random()-.5)*3)),
        lb:  (0.231*(1+(Math.random()-.5)*.03)).toFixed(3),
      });
    }, 3200);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, marginBottom:8 }}>
      <KpiCard label="Avg Latency"  value={vals.lat} unit="ms" delta="▼ 42% vs baseline" deltaGood accent="#A8D8EA" darkAccent="#3A7D9A" />
      <KpiCard label="Total Energy" value={vals.en}  unit="kJ" delta="▼ 61% energy saved" deltaGood accent="#C3B1E1" darkAccent="#6B4EA0" />
      <KpiCard label="QoS Rate"     value={vals.qos} unit="%"  delta="▲ deadlines met"   deltaGood accent="#B5EAD7" darkAccent="#2E8A60" />
      <KpiCard label="Load Balance" value={vals.lb}  unit="LB" delta="▲ needs improvement" accent="#FFD6A5" darkAccent="#A06B10" />
    </div>
  );
}