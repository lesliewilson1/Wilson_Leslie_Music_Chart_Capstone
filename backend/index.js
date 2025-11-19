import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import { spotifyToken } from './routes/token.js';
//----------------------------------Configuration--------------------------------------------------//
dotenv.config();
const app = express();
const port = process.env.PORT || 3000
app.use(cors())
// await mongoose.connect (process.env.ATLAS_URI)

//----------------------------------Routes---------------------------------------------------------//


app.get('/', (req, res) => {
  res.json('Server Working');
});


app.get('/tracks', async (req, res) => {

    const accessToken = await spotifyToken();

    //Fetch Leslie's Top 50 Charts
    const playlistId = '5N6oTfw4CiGREvmDH5WfAD';
    const trackResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
  
    res.json(trackResponse.data);
  });



//-------------------------------------Listening---------------------------------------------------//

app.listen(port, () => {
  console.log('Listening Port: ' + port);
});