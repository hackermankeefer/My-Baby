import { Clapperboard, Gamepad2, Laugh } from 'lucide-react';
const MOMENTS=[
  {title:'Her humor',description:'One of my favorite things about her—and a big part of why there’s so much laughter in our memories.',Icon:Laugh},
  {title:'The gamer',description:'High-ranked in Mobile Legends: Bang Bang, and always up for Roblox two-player or survival games.',Icon:Gamepad2},
  {title:'My favorite company',description:'Movie nights, late-night talks, and laughing together. I love the time we spend side by side.',Icon:Clapperboard}
];
export default function FavoriteMoments(){return <section id="moments" className="favorite-moments"><div className="section-inner"><div className="section-heading"><h2>A few things to know about Eina</h2><p>She’s funny, loves a good game night, and is my favorite person to spend time with.</p></div><div className="moments-grid">{MOMENTS.map(({title,description,Icon})=><article key={title} className="moment"><Icon className="moment-icon" aria-hidden="true" strokeWidth={1.7}/><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>}
