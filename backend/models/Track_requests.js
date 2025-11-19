import mongoose from "mongoose";

const trackSchema = mongoose.Schema({
    Track: {type: String, required: true},
    Artist: {type: String, required: true},
    Year: {type: Number, required: true}
})

const Track = mongoose.model('track_request', trackSchema,'track')

export default Track