import { useState } from 'react';
import { ALGORITHMS, ALGO_COLORS } from './data/algoData';

function LineChart() {
  const W=420, H=160, P={ t:10, r:10, b:30, l:35 };
  const iW=W-P.l-P.r, iH=H-P.t-P.b;
  const pts = curve => curve.map((v,i) => {
    const x = P.l+(i/19)*iW;
    const y = P.t+iH-((v/100)*iH);
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display:'block' }}>
      {[0,25,50,75,100].map(v => {
        const y = P.t+iH-((v/100)*iH);
        return <g key={v}>
          <line x1={P.l} y1={y} x2={W-P.r} y2={y} stroke="#F2EEFF" strokeWidth="0.8"/>
          <text x={P.l-4} y={y+3} textAnchor="end" fontSize="7" fill="#B0A8D0">{v}%</text>
        </g>;
      })}
      {[1,5,10,15,20].map(i => (
        <text key={i} x={P.l+((i-1)/19)*iW} y={H-6} textAnchor="middle" fontSize="7" fill="#B0A8D0">{i}</text>
      ))}
      <text x={W/2} y={H} textAnchor="middle" fontSize="7" fill="#B0A8D0">Iteration</text>
      {ALGORITHMS.map(a => (
        <polyline key={a.id} points={pts(a.curve)} fill="none"
          stroke={ALGO_COLORS[a.id].dark}
          strokeWidth={a.id==='HYBRID'?2.5:1.5}
          strokeLinejoin="round" strokeLinecap="round"/>
      ))}
    </svg>
  );
}

function ScatterPlot() {
  const W=280, H=155, P={ t:10, r:15, b:28, l:38 };
  const iW=W-P.l-P.r, iH=H-P.t-P.b;
  const lats=ALGORITHMS.map(a=>a.latency), ens=ALGORITHMS.map(a=>a.energy);
  const minX=Math.min(...lats)*0.88, maxX=Math.max(...lats)*1.06;
  const minY=Math.min(...ens)*0.7,   maxY=Math.max(...ens)*1.12;
  const cx=lat=>P.l+((lat-minX)/(maxX-minX))*iW;
  const cy=en =>P.t+iH-((en-minY)/(maxY-minY))*iH;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display:'block' }}>
      {[0.25,0.5,0.75,1].map(t => {
        const y=P.t+iH*(1-t);
        return <g key={t}>
          <line x1={P.l} y1={y} x2={W-P.r} y2={y} stroke="#F2EEFF" strokeWidth="0.8"/>
          <text x={P.l-3} y={y+3} textAnchor="end" fontSize="6" fill="#B0A8D0">{(minY+t*(maxY-minY)).toFixed(2)}</text>
        </g>;
      })}
      {[0.25,0.5,0.75,1].map(t => {
        const x=P.l+t*iW;
        return <g key={t}>
          <line x1={x} y1={P.t} x2={x} y2={P.t+iH} stroke="#F2EEFF" strokeWidth="0.8"/>
          <text x={x} y={H-4} textAnchor="middle" fontSize="6" fill="#B0A8D0">{Math.round(minX+t*(maxX-minX))}</text>
        </g>;
      })}
      <text x={W/2} y={H} textAnchor="middle" fontSize="6.5" fill="#B0A8D0">Latency (ms)</text>
      {ALGORITHMS.map(a => (
        <g key={a.id}>
          <circle cx={cx(a.latency)} cy={cy(a.energy)} r={6}
            fill={ALGO_COLORS[a.id].fill} stroke={ALGO_COLORS[a.id].dark} strokeWidth="1.5"/>
          <text x={cx(a.latency)} y={cy(a.energy)-9} textAnchor="middle" fontSize="6.5"
            fill={ALGO_COLORS[a.id].dark} fontWeight="700">{a.id}</text>
        </g>
      ))}
    </svg>
  );
}

const card = { background:'#fff', border:'1px solid #EAE4F8', borderRadius:14, padding:14, boxShadow:'0 2px 8px rgba(120,100,180,0.06)' };

export default function ChartRow() {
  const [view, setView] = useState('conv');
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:8, marginBottom:8 }}>
      <div style={card}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
          <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0' }}>
            {view==='conv'?'Convergence Curves':'Pareto Front'}
          </div>
          <div style={{ display:'flex', gap:5 }}>
            {['conv','pareto'].map(v=>(
              <button key={v} onClick={()=>setView(v)} style={{ padding:'3px 9px', borderRadius:10, fontSize:9, fontWeight:700,
                border:`1px solid ${view===v?'#C3B1E1':'#EAE4F8'}`,
                background:view===v?'#EEE8FF':'#F8F4FF',
                color:view===v?'#6B4EA0':'#B0A8D0', cursor:'pointer' }}>
                {v==='conv'?'Convergence':'Pareto Front'}
              </button>
            ))}
          </div>
        </div>
        {view==='conv' ? <LineChart /> : <ScatterPlot />}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:8 }}>
          {ALGORITHMS.map(a=>(
            <div key={a.id} style={{ display:'flex', alignItems:'center', gap:4, fontSize:9, color:'#7A70A0' }}>
              <div style={{ width:16, height:3, borderRadius:2, background:ALGO_COLORS[a.id].dark }}/>
              {a.id}
            </div>
          ))}
        </div>
      </div>
      <div style={card}>
        <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0', marginBottom:10 }}>
          Latency vs Energy
        </div>
        <ScatterPlot />
        <div style={{ fontSize:8, color:'#B0A8D0', textAlign:'center', marginTop:6 }}>Bottom-left = best performance</div>
      </div>
    </div>
  );
}