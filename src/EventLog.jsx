import { useState, useEffect, useRef } from 'react';
import { LOG_EVENTS } from './data/algoData';
export default function EventLog() {
  const [logs, setLogs] = useState([]);
  const idx = useRef(0);
  useEffect(() => {
    const add = () => {
      const e=LOG_EVENTS[idx.current%LOG_EVENTS.length];
      const n=new Date();
      const ts=[n.getHours(),n.getMinutes(),n.getSeconds()].map(v=>String(v).padStart(2,'0')).join(':');
      setLogs(p=>[{...e,ts,key:Date.now()+Math.random()},...p].slice(0,20));
      idx.current++;
    };
    add();
    const id=setInterval(add,2400);
    return ()=>clearInterval(id);
  },[]);
  return (
    <div style={{ background:'#fff', border:'1px solid #EAE4F8', borderRadius:14, padding:14, boxShadow:'0 2px 8px rgba(120,100,180,0.06)' }}>
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0', marginBottom:8 }}>Scheduler Event Log</div>
      <div style={{ height:132, overflowY:'auto' }}>
        {logs.map(log=>(
          <div key={log.key} style={{ display:'flex', gap:6, padding:'3px 0', borderBottom:'1px solid #F8F4FF' }}>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:'#C0B8D8', flexShrink:0 }}>{log.ts}</span>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, fontWeight:700, color:log.color, flexShrink:0 }}>[{log.tag}]</span>
            <span style={{ fontSize:9, color:'#7A70A0' }}>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}