import { AudioLines } from 'lucide-react';

const spotifyMatchImage = '/images/spotify-match.jpg';

export default function SpotifyFeature(){
  return <section className="spotify-section" id="spotify"><div className="spotify-layout"><div className="spotify-art spotify-real-art"><img className="spotify-placeholder-image" src={spotifyMatchImage} alt="Spotify Blend screenshot showing Keefer and eeeya with a 98% taste match and Smells Like Teen Spirit – Remastered as their shared song."/></div><div className="spotify-copy"><h2>Our Blend is a 98% match.</h2><p>Keefer + eeeya, united by “Smells Like Teen Spirit – Remastered.”</p><div className="match-number"><strong>98%</strong><span>Spotify Blend match</span></div><span className="replace-note"><AudioLines size={15}/> &nbsp;Our little music twin moment</span></div></div></section>;
}
