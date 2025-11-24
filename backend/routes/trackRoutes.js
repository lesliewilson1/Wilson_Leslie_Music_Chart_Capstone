import express from 'express';
import Track from '../models/Track.js'

const router = express.Router()

//Get track requests
router.get('/trackrequest', async (req,res) => {
    const results = await Track.find({})
    res.json(results)
});


//Post track
router.post('/trackrequest', async (req, res) => {
    try{
        const trackDoc = new Track(req.body);
        const result = await trackDoc.save();
        res.json(result)
        console.log(result)
    }catch(e) {
        res.status(400).json({ Oops: e.message });
    }

});


//Update track
router.put('/trackrequest/:id', async (req, res) => {
    try {const result = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(result);
} catch(er) {
    res.status(500).json({ Oops: er.message });
}

});

//Delete track
router.delete('/trackrequest/:id', async (req, res) => {
    try {
        const result = await Track.deleteOne({ _id: req.params.id });
        console.log(result);
        res.json({ message: 'Requested Track deleted successfully', result });
    } catch (er) {
        console.error(er);
        res.status(500).json({ Oops: er.message })
    }
});

export default router;