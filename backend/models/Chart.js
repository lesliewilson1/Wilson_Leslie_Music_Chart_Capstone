import mongoose from "mongoose";

const chartSchema = mongoose.Schema({
    track_id: {type: String, required: true, index: true},
    track_name: {type: String, required: true},
    artist_name: {type: String, required: true},
    image_url: {type: String},
    spotify_url: {type: String},
    popularity: {type: Number},
    added_at: {type: Date},

})

const Chart = mongoose.model('chart', chartSchema,'track')

export default Chart