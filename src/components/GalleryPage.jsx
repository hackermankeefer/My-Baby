import { useState } from 'react';
import { ArrowLeft, Heart, Images, Image as ImageIcon } from 'lucide-react';

const robloxPhotos = [
  ['pro.png', 'Our avatars together in a Roblox game'],
  ['day1.png', 'Our Roblox avatars standing together on a wooden deck'],
  ['123123132.png', 'Our avatars meeting across a table in a classroom'],
  ['13123.png', 'Our avatars sitting together at a classroom desk'],
  ['IMG_4101.png', 'Our avatars together in a dimly lit Roblox game'],
  ['zxczxc.png', 'Our avatars standing together beside a waterfall'],
  ['mt kambuno.png', 'Our avatars at the Mt. Kambuno summit'],
  ['RobloxScreenShot20260920_141401786.png', 'Our avatars surviving together in Roblox'],
  ['23435245.png', 'Our avatars standing together on a dock'],
  ['Screenshot_2026-07-20_234107.png', 'Our avatars at a scenic Roblox location'],
  ['5848914191_122802147482832_1783438149731.png', 'Our avatars together in a Roblox game'],
  ['Screenshot_2026-07-20_234113.png', 'Our avatars sitting together on a park bench'],
  ['3452256.png', 'Our avatars together under an orange sunset'],
  ['13445453.png', 'Our avatars together under the moonlight'],
  ['5848914191_108645230905176_1783432462375.png', 'Our avatars spending time together by a campfire'],
  ['5848914191_92416817362629_1781157495854.png', 'Our avatars standing side by side in a game arena'],
  ['Screenshot_2026-07-20_233749.png', 'Our avatars and cat together in a grassy field'],
  ['Screenshot_2026-07-20_234018.png', 'Our avatars together in a Japanese garden'],
  ['5848914191_118579556148220_1780465456730.png', 'Our avatars exploring an island together'],
];

const categories = [
  { id: 'mlbb', title: 'Mobile Legends', label: 'MLBB', description: 'Our matches, favorite plays, and game night memories.', count: 'Photos coming soon', color: 'mlbb-folder' },
  { id: 'roblox', title: 'Roblox', label: 'ROBLOX', description: 'Our co-op adventures, hangouts, and silly moments.', count: `${robloxPhotos.length} photos`, color: 'roblox-folder', cover: robloxPhotos[5][0] },
  { id: 'other', title: 'Other moments', label: 'OTHERS', description: 'The rest of our favorite little memories.', count: 'Photos coming soon', color: 'other-folder' },
];

export default function GalleryPage() {
  const [activeFolder, setActiveFolder] = useState(null);
  const folder = categories.find(({ id }) => id === activeFolder);

  return <><header className="site-header"><a className="wordmark" href="/#top" aria-label="Meet Eina, back to home"><Heart className="wordmark-heart" size={19} fill="currentColor"/> Eina &amp; me</a><nav className="site-nav" aria-label="Main navigation"><a href="/#moments">About Eina</a><a href="/#story">Our story</a><a href="/#spotify">Our match</a><a className="gallery-nav gallery-nav-active" href="/gallery.html" aria-current="page"><Images size={16} aria-hidden="true"/> Gallery</a></nav></header><main className="gallery-page"><section className="gallery-intro"><div className="gallery-icon"><Images size={25} aria-hidden="true"/></div><h1>{folder ? folder.title : 'Our in-game moments'}</h1><p>{folder ? folder.description : 'Pick a folder to browse our memories together.'}</p></section>{!folder && <section className="avatar-gallery" aria-label="Our Discord profile GIFs"><div className="avatar-gallery-heading"><h2>Our Discord avatars</h2><p>Two little profile GIFs, together in one place.</p></div><div className="avatar-gallery-grid"><figure className="avatar-gallery-card"><img src="/images/gallery/avatars/eina.gif" alt="Eina’s animated Discord profile picture"/><figcaption>Eina</figcaption></figure><figure className="avatar-gallery-card"><img src="/images/gallery/avatars/me.gif" alt="My animated Discord profile picture"/><figcaption>Me</figcaption></figure></div></section>}{folder ? <section className="folder-view" aria-label={`${folder.title} photo folder`}><button type="button" className="back-to-folders" onClick={() => setActiveFolder(null)}><ArrowLeft size={17}/> All folders</button>{activeFolder === 'roblox' ? <div className="gallery-grid roblox-gallery">{robloxPhotos.map(([file, description], index) => <figure className="gallery-photo" key={file}><img src={`/images/gallery/roblox/${encodeURIComponent(file)}`} alt={description} loading={index > 5 ? 'lazy' : 'eager'}/><figcaption>Roblox moment {String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div> : <div className="empty-folder"><ImageIcon size={28}/><h2>This folder is ready for photos</h2><p>Add pictures to the {folder.title} folder to fill it with memories.</p></div>}</section> : <section className="folder-grid" aria-label="Photo folders">{categories.map((item) => <button className={`folder-card ${item.color}`} type="button" key={item.id} onClick={() => setActiveFolder(item.id)}><span className="folder-cover">{item.cover ? <img src={`/images/gallery/roblox/${encodeURIComponent(item.cover)}`} alt=""/> : <Images size={35} aria-hidden="true"/>}<span className="folder-cover-label">{item.label}</span></span><span className="folder-card-copy"><strong>{item.title}</strong><span>{item.description}</span><small>{item.count}</small></span></button>)}</section>}</main><footer className="site-footer">Made with love, for my favorite plot twist.</footer></>;
}
