const express =require ('express')
const cors = require('cors')
// const fetch = require('node-fetch')
const app = express()
const port = 8000
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))
app.use(express.json())
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
];

app.get('/',(req,res)=>{
    res.json({message: 'api is working'})
})
// get a random quote
app.get('/quote',(req, res)=>{
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const quote  = quotes[randomIndex]
    res.json(quote)
})
// by fetching an external api
app.get('/quote/external',async(req, res)=>{
    const response = await fetch('https://dummyjson.com/quotes')
    const data = await response.json()
    const allQuotes = data.quotes
    const randomIndex = Math.floor(Math.random()*allQuotes.length)
    const singleQuote = allQuotes[randomIndex]
    res.json(singleQuote)
})
app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})