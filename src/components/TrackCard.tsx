import React from 'react';
import {  CardContent, CardMedia, Typography, Link, Paper } from '@mui/material';
import { Track } from '@spotify/web-api-ts-sdk';

interface TrackCardProps {
  track: Track;
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const cardStyle = {
    display: 'flex',
    width: 300,
    marginBottom: 20,
  };

  const mediaStyle = {
    width: 100,
    height: 100,
    marginRight: 10,
  };

  const cardContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const trackNameStyle = {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: 8,
  };

  const durationStyle = {
    fontSize: '0.875rem',
    color: 'gray',
  };

  const linkStyle = {
    marginTop: 'auto',
    color: '#1DB954',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  };

  const formatDuration = (duration_ms: number) => {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < '10' ? '0' : ''}${seconds}`;
  };

  return (
    <Paper elevation={3} style={cardStyle}>
      <CardMedia
        style={mediaStyle}
        component="img"
        alt={track.name}
        image={track.album.images[0].url}
      />
      <CardContent classes={cardContentStyle}>
        <Typography variant="body1" style={trackNameStyle}>
          {track.name}
        </Typography>
        <Typography variant="body2" style={durationStyle}>
          {formatDuration(track.duration_ms)}
        </Typography>
        <Link href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Listen on Spotify
        </Link>
      </CardContent>
    </Paper>
  );
};

export default TrackCard;
