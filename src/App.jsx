import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero.jsx';
import MeetCute from './components/MeetCute.jsx';
import Timeline from './components/Timeline.jsx';
import FavoriteMoments from './components/FavoriteMoments.jsx';
import ReunionStory from './components/ReunionStory.jsx';
import SpotifyFeature from './components/SpotifyFeature.jsx';
import ClosingNote from './components/ClosingNote.jsx';
export default function App(){
 const [activeNode,setActiveNode]=useState(null);const closeButton=useRef(null);const previousFocus=useRef(null);
 useEffect(()=>{if(!activeNode)return undefined;previousFocus.current=document.activeElement;closeButton.current?.focus();const onKeyDown=e=>{if(e.key==='Escape')setActiveNode(null)};document.addEventListener('keydown',onKeyDown);return()=>{document.removeEventListener('keydown',onKeyDown);previousFocus.current?.focus?.()}},[activeNode]);
 return <><Hero/><main><FavoriteMoments/><MeetCute/><Timeline onNodeClick={setActiveNode}/><ReunionStory/><SpotifyFeature/><ClosingNote/></main>{activeNode&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setActiveNode(null)}}><section className="modal-content" role="dialog" aria-modal="true" aria-labelledby="timeline-dialog-title"><button ref={closeButton} className="close-btn" type="button" onClick={()=>setActiveNode(null)} aria-label="Close story detail">×</button><h3 id="timeline-dialog-title">{activeNode.title}</h3><p>{activeNode.description}</p></section></div>}</>
}
