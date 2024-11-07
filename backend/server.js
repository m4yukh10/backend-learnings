import express from 'express';
const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id:2,
            title: 'nigga 1 ',
            content: 'another joke'
        },
        {
            id:3,
            title: 'nigga 2',
            content: 'another one'
        },
        {
            id:4,
            title: 'nigga 3',
            content: 'hell nahh!!!!! xdxd'
        }
    ];
    res.send(jokes);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})