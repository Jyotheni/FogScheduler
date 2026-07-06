export default function ArchTopology() {
  return (
    <div style={{ background:'#fff', border:'1px solid #EAE4F8', borderRadius:14, padding:14, boxShadow:'0 2px 8px rgba(120,100,180,0.06)', height:'100%' }}>
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0', marginBottom:8 }}>Architecture Topology</div>
      <svg width="100%" viewBox="0 0 240 270">
        <text x="120" y="14" fill="#C0B8D8" fontSize="7" textAnchor="middle" letterSpacing="1">IoT LAYER</text>
        {[{x:28,y:36,i:'📡'},{x:72,y:26,i:'🌡'},{x:120,y:36,i:'⚙'},{x:168,y:26,i:'📷'},{x:212,y:36,i:'🤖'}].map(({x,y,i},k)=>(
          <g key={k}><circle cx={x} cy={y} r={12} fill="#EAF6FB" stroke="#A8D8EA" strokeWidth="1"/><text x={x} y={y+4} textAnchor="middle" fontSize="9">{i}</text></g>
        ))}
        <text x="120" y="90" fill="#C0B8D8" fontSize="7" textAnchor="middle" letterSpacing="1">FOG LAYER</text>
        {[{x:25,l:'FN-01',c:'88%',b:true},{x:100,l:'FN-02',c:'62%',b:false},{x:175,l:'FN-03',c:'45%',b:false}].map(({x,l,c,b})=>(
          <g key={l}>
            <rect x={x} y={100} width={60} height={30} rx="6" fill={b?'#FFF6E8':'#F0EAFB'} stroke={b?'#FFD6A5':'#C3B1E1'} strokeWidth="1"/>
            <text x={x+30} y={112} textAnchor="middle" fontSize="7" fontWeight="700" fill={b?'#A06B10':'#6B4EA0'}>{l}</text>
            <text x={x+30} y={123} textAnchor="middle" fontSize="6" fill={b?'#C8A060':'#9B82C8'}>{c}</text>
          </g>
        ))}
        <text x="120" y="162" fill="#C0B8D8" fontSize="7" textAnchor="middle" letterSpacing="1">CLOUD LAYER</text>
        <rect x="18" y="170" width="204" height="36" rx="8" fill="#EAF6FB" stroke="#A8D8EA" strokeWidth="1"/>
        <text x="120" y="185" textAnchor="middle" fontSize="8" fontWeight="700" fill="#3A7D9A">Cloud Data Center</text>
        <text x="75" y="198" textAnchor="middle" fontSize="6.5" fill="#7ABFCE">VM Pool: 24 active</text>
        <text x="170" y="198" textAnchor="middle" fontSize="6.5" fill="#7ABFCE">Storage: 2.4 TB</text>
        <rect x="50" y="220" width="140" height="24" rx="6" fill="#FFF6E8" stroke="#FFD6A5" strokeWidth="1" strokeDasharray="3 2"/>
        <text x="120" y="235" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#A06B10">MHOT Scheduler</text>
        {[[28,48,55,100],[72,38,55,100],[120,48,130,100],[168,38,130,100],[212,48,205,100]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A8D8EA" strokeWidth="0.8" opacity="0.7"/>
        ))}
        {[[55,130,90,170],[130,130,120,170],[205,130,155,170]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C3B1E1" strokeWidth="0.8" opacity="0.7"/>
        ))}
        <line x1="120" y1="206" x2="120" y2="220" stroke="#FFD6A5" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    </div>
  );
}