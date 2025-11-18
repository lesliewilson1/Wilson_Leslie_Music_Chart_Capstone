import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let cachedToken = null;
let tokenExpires = 0

export async function spotifyToken() {

    const now = Date.now();

  if (cachedToken && now < tokenExpires) {
    return cachedToken;
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', process.env.SPOTIFY_CLIENT_ID);
  params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);

  const response = await axios.post('https://accounts.spotify.com/api/token', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  cachedToken = response.data.access_token;
  tokenExpires = now + response.data.expires_in * 1000; // expires_in is in seconds

  return cachedToken;
}