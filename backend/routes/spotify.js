//Postman to retrieve

app.get('/tracks', async (req, res) => {
  try {
    // Step 1: Get access token
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', process.env.SPOTIFY_CLIENT_ID);
    params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);

    console.log('Client ID:', process.env.SPOTIFY_CLIENT_ID);
    console.log('Client Secret:', process.env.SPOTIFY_CLIENT_SECRET);

    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const accessToken = tokenResponse.data.access_token;



    console.log('Token response:', tokenResponse.data);
    // Step 2: Fetch playlist tracks
    const playlistId = '37i9dQZF1DXcBWIGoYBM5M'; // Top 50 USA
    const trackResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });



    res.json(trackResponse.data);
  } catch (error) {
    console.error('Error fetching tracks:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
});
