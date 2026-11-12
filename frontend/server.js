const express = require('express');

const app = express()


app.use(express.json())

app.use(express.static('public'));

app.post('/api/tasks' , async (req, res) => {
    try{

        const response = await fetch(`${process.env.BACKEND_URL || 'http://127.0.0.1:5000'}/api/tasks` ,{
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        })

        const result = await response.json()

        res.status(response.status).json(result);
    }catch (error) {
        console.error('backend communicaton error:', error.message);

        res.status(502).json({
            message: 'Unable to communicate with flask backend'
        })
    }
})


app.listen(3000, '0.0.0.0', () => {
    console.log("port is working fine");
    
})

