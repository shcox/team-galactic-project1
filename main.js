const nexturl = require('./urlshortener')
const express = require('express')
const app = express()
const port = 5000

let counter = 1
const memory = {}
// this should be a POST
app.get('/lurl_to_surl', (req, res) => {

    let lurl = req.query.url
    let surl = urlshortener(counter, lurl)
    return_object[lurl] = surl;
    memory[lurl] = surl

    res.json(return_object)
    // let map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // let return_object = {}

    // if (memory[url]) {
    //     return_object[url] = memory[url]
    // } else {
    //     let short_url = ''
    //     let n = counter
    //     counter++

    //     while (n > 0) {
    //         short_url = short_url + map[n % 62]
    //         n = Math.floor(n / 62);
    //     }

    //     while (short_url.length < 6) {
    //         short_url + '0'
    //     }

    //     return_object[url] = short_url
    //     memory[url] = short_url
    // }
    
    // res.json(return_object)

})

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