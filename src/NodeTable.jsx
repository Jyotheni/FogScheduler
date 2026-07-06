import { FOG_NODES } from './data/algoData';
export default function NodeTable() {
  return (
    <div style={{ background:'#fff', border:'1px solid #EAE4F8', borderRadius:14, padding:14, boxShadow:'0 2px 8px rgba(120,100,180,0.06)' }}>
      <div style={{ fontSize:9, fontWeight:700, letterSpacing:1.4, textTransform:'uppercase', color:'#B0A8D0', marginBottom:10 }}>Fog Node Status</div>
      <table style={{ width:'100%', borderCollapse:'collapse' }}>
        <thead><tr>{['Node','Location','CPU','Tasks','State'].map(h=>(
          <th key={h} style={{ fontSize:8, fontWeight:700, letterSpacing:1, textTransform:'uppercase', color:'#C0B8D8', padding:'3px 8px', borderBottom:'1px solid #EAE4F8', textAlign:'left' }}>{h}</th>
        ))}</tr></thead>
        <tbody>{FOG_NODES.map((n,i)=>{
          const cc=n.cpu>85?'#F9C6CE':n.cpu>60?'#FFD6A5':'#B5EAD7';
          const cd=n.cpu>85?'#C05A70':n.cpu>60?'#A06B10':'#2E8A60';
          const dc=n.status==='busy'?'#FFD6A5':'#B5EAD7';
          const dd=n.status==='busy'?'#A06B10':'#2E8A60';
          return (
            <tr key={n.id} style={{ background:i%2===0?'#FDFCFF':'#fff' }}>
              <td style={{ padding:'5px 8px', borderBottom:'1px solid #F8F4FF', fontSize:10, fontFamily:"'DM Mono',monospace", color:'#7B5EA7' }}>{n.id}</td>
              <td style={{ padding:'5px 8px', borderBottom:'1px solid #F8F4FF', fontSize:10, color:'#5A5080' }}>{n.loc}</td>
              <td style={{ padding:'5px 8px', borderBottom:'1px solid #F8F4FF' }}>
                <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                  <div style={{ width:52, height:5, background:'#F0ECF8', borderRadius:3, overflow:'hidden' }}>
                    <div style={{ height:'100%', width:`${n.cpu}%`, background:cc, borderRadius:3 }}/>
                  </div>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:cd }}>{n.cpu}%</span>
                </div>
              </td>
              <td style={{ padding:'5px 8px', borderBottom:'1px solid #F8F4FF', fontSize:10, fontFamily:"'DM Mono',monospace", color:'#5A5080' }}>{n.tasks}</td>
              <td style={{ padding:'5px 8px', borderBottom:'1px solid #F8F4FF' }}>
                <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                  <div style={{ width:7, height:7, borderRadius:'50%', background:dc }}/>
                  <span style={{ fontSize:8, color:dd, fontWeight:700, textTransform:'uppercase' }}>{n.status}</span>
                </div>
              </td>
            </tr>
          );
        })}</tbody>
      </table>
    </div>
  );
}