import express from 'express';

const app = express()

const port = 8080

app.get('/', (req, res) => {
    res.json('Server Working')
})

app.listen(8080, () => {
    console.log('Listening Port: '+ port)
})