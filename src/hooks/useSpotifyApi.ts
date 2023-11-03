import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";
export function useSpotifyApi(
  clientId: string,
  clientSecret: string
) {
  const [spotifyApi, setSpotifyApi] = useState<SpotifyApi | null>(null);

  useEffect(() => {
    if (clientId && clientSecret) {
      setSpotifyApi(SpotifyApi.withClientCredentials(clientId, clientSecret));
    } else {
      setSpotifyApi(null);
    }
  }, [clientId, clientSecret]);

  return spotifyApi;
}
