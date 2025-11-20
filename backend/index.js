import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import { spotifyToken } from './token.js';
import Track from './models/Track.js';
//----------------------------------Configuration--------------------------------------------------//
dotenv.config();
const app = express();
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

//----------------------------------Routes---------------------------------------------------------//

//Main route
app.get('/', (req, res) => {
  res.json('Server Working');
});

//-----------------------------------Get Routes-------------------------------------------//

//Get all post track requests
app.get('/trackrequest', async (req,res) => {
    const results = await Track.find({})
    res.json(results)
});

//-----------------------------------Post Routes---------------------------------------------//

//Post track
app.post('/trackrequest', async (req, res) => {
    try{
        const trackDoc = new Track(req.body);
        const result = await trackDoc.save();
        res.json(result)
        console.log(result)
    }catch(er) {
        res.status(400).json({ Oops: er.message });
    }

});

//----------------------------------3rd party API route----------------------------------------------//

//********************************Fetch Leslie's Top 15 Tracks***************************************//
app.get('/tracks', async (req, res) => {

  try {
    const accessToken = await spotifyToken();
    const playlistId = '5N6oTfw4CiGREvmDH5WfAD';
    const trackResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

 //Filter API data to display clean data for frontend
    const filteredTracks = trackResponse.data.items.map(item => {
      const track = item.track;
      return {
        track_id: track.id,
        track_name: track.name,
        artist_name: track.artists[0]?.name || 'Unknown', //optional chaining
        image_url: track.album.images[1]?.url || '',
        spotify_url: track.external_urls.spotify,
        popularity: track.popularity,
        added_at: item.added_at
      };
    });

    res.json(filteredTracks);
     } catch(e) {
      console.log('Error fetch from API:', e.trackResponse)
      res.status(500).json({e: 'Error fetch from API'}) //display error in frontend
     }
  });
 



//-------------------------------------Listening/connectDB---------------------------------------------//

app.listen(port, () => {
  console.log('Listening Port: ', port);
  connectDB()
});