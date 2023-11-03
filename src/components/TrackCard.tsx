import { Track } from '@spotify/web-api-ts-sdk';
import React, { useMemo } from 'react';

interface TrackCardProps {
  track: Track;
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const formattedDuration = useMemo(() => {
    const minutes = Math.floor(track.duration_ms / 60000);
    const seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < '10' ? '0' : ''}${seconds}`;
  }, [track.duration_ms]);

  return (
    <div className="track-card">
      <img src={track.album.images[0].url} alt={track.name} />
      <p>{track.name}</p>
      <p>{formattedDuration}</p>
      <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        Listen on Spotify
      </a>
    </div>
  );
};

export default TrackCard;
