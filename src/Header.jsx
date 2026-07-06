import { useState, useEffect } from 'react';

function Pill({ children, color, bg, border, blink }) {
  return (
    <span style={{ padding:'3px 11px', borderRadius:20, fontSize:10, fontWeight:700,
      fontFamily:"'DM Mono',monospace", color, background:bg, border:`1px solid ${border}`,
      display:'inline-flex', alignItems:'center', gap:5 }}>
      {blink && <span style={{ width:6, height:6, borderRadius:'50%', background:color, animation:'blink 1.4s infinite' }} />}
      {children}
    </span>
  );
}

export default function Header() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime([n.getHours(),n.getMinutes(),n.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':'));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <header style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
      background:'#fff', border:'1px solid #EAE4F8', borderRadius:16,
      padding:'12px 20px', marginBottom:10, boxShadow:'0 2px 14px rgba(120,100,180,0.07)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:42, height:42, borderRadius:13,
          background:'linear-gradient(135deg,#C3B1E1,#A8D8EA)',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>🌸</div>
        <div>
          <div style={{ fontSize:15, fontWeight:800, color:'#3A3060' }}>IoT · Fog · Cloud Optimizer</div>
          <div style={{ fontSize:9, color:'#B0A8D0', letterSpacing:1.2, textTransform:'uppercase', marginTop:1 }}>
            Metaheuristic Task Scheduling Engine
          </div>
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <Pill color="#3A9A6A" bg="#E8F8EE" border="#B5EAD7" blink>LIVE</Pill>
        <Pill color="#6B4EA0" bg="#EEE8FF" border="#C3B1E1">PSO+GWO HYBRID</Pill>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:'#9090B8' }}>{time}</span>
      </div>
    </header>
  );
}