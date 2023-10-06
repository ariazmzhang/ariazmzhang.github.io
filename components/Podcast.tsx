import React from 'react';
import SpotifyEmbed from './SpotifyEmbed';

const Podcast: React.FC = ({  }) =>  {
  return (
    <div className="bg-gray-100 py-12 bg-opacity-50 h-full">
        <h1 className="text-2xl text-black font-semibold text-center mb-8 "> 🎧 My Podcast</h1>
        <div className="container mx-auto px-4">
            <div className="max-w-5xl w-full h-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/3WGVUWK2XaTpwJsAozfdrw?utm_source=generator&theme=0" />            
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/62nzzScXx3IPCWCmUhdcMj?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/4tBI4smSXznIhbESBUD7tm?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/5JNIrtOqRFK3fsdp4OfHzW?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/4450eWpSPTAetKOtaKCwFq?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/1ZPDHlex34xhrCgTqEMtss?utm_source=generator&theme=0" />
			</div>
        </div>  
    </div>
        
  );
};

export default Podcast;