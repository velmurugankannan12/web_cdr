const express = require('express');
const app = express();

app.use(express.json())

app.get('/webhook/cdr', (req,res) => {
    console.log(req.query)
    res.sendStatus(200)
    
})


app.listen(5000, () => {console.log('cdr  5000')})