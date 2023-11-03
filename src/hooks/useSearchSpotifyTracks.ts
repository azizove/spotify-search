import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useCallback } from "react";
export function useSearchSpotifyTracks(spotifyApi: SpotifyApi | null) {
    const searchTracks = useCallback(
      async (query: string) => {
        if (spotifyApi) {
          try {
            // @ts-ignore
            const response = await spotifyApi.search(query, ['track']);
            return response.tracks.items;
          } catch (error) {
            throw error;
          }
        }
      },
      [spotifyApi]
    );
  
    return searchTracks;
}