import { useState } from 'react';
import Header       from './Header';
import KpiRow       from './KpiRow';
import ChartRow     from './ChartRow';
import AlgoCards    from './AlgoCards';
import RadarChart   from './RadarChart';
import NodeTable    from './NodeTable';
import EventLog     from './EventLog';
import ArchTopology from './ArchTopology';

export default function App() {
  const [selectedAlgo, setSelectedAlgo] = useState(2);
  return (
    <div style={{ minHeight:'100vh', background:'#F8F4FF', padding:'10px 12px', fontFamily:"'Nunito',sans-serif" }}>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
      <Header />
      <KpiRow />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 230px', gap:8, marginBottom:8 }}>
        <div style={{ minWidth:0 }}><ChartRow /></div>
        <ArchTopology />
      </div>
      <AlgoCards selected={selectedAlgo} onSelect={setSelectedAlgo} />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
        <NodeTable />
        <RadarChart selectedIdx={selectedAlgo} />
        <EventLog />
      </div>
    </div>
  );
}