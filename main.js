const shortener = require('./urlshortener')
const express = require('express')

const app = express()
// we need this so that we can parse POST bodies
app.use(express.json())

let counter = 1
const memory = {}
const port = 5000
// this should be a POST

app.post('/lurl_post', (req, res) => {
    let lurl = req.body.name
    let surl = shortener.nexturl(counter, lurl)
    memory[lurl] = surl 
    counter += 1
    res.end()
})

// app.get('/lurl_to_surl', (req, res) => {

//     let lurl = req.query.url
//     let surl = shortener.nexturl(counter, lurl)
//     let return_object = {}
//     return_object[lurl] = surl;
//     memory[lurl] = surl
//     counter += 1
//     res.json(return_object)
// })

app.get('/surl_to_redirect', (req, res) => {

    let short_url = req.query.url
    let long_url = Object.keys(memory).find(url => memory[url] === short_url)

    res.redirect(long_url)
})

app.get('/find_surl', (req, res) => {
    let long_url = req.query.url
    let return_json = {}
    return_json[long_url] = memory[long_url]
    res.json(return_json)
})

app.get('/', (req, res) => {
    res.json({ hello: 'world'})
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})