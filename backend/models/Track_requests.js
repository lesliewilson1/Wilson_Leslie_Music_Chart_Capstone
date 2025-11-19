import mongoose from "mongoose";

const trackSchema = mongoose.Schema({
    track: {type: String, required: true},
    artist: {type: String, required: true},
    year: {type: Number, required: true}
})

const Track = mongoose.model('track_request', trackSchema,'track')

export default Track