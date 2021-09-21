let map = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let urllen = 6;
let curID = 100000000;
let urlDict = {};

function shortenUrl(id) {
    let url = '';
    while (id != -1) {
        url = url + map[id % map.length];
        if (id >= map.length) {
            id = Math.floor(id / map.length);
        } else {
            id = -1;
        }
    }
    while (url.length < urllen) {
        url += '0';
    }
    return url;
}

function nexturl(url) {
    curID++;
    let shortUrl = shortenUrl(curID);
    urlDict[url] = shortUrl;
    return shortUrl;
}

function shortToLong(url) {
    // TODO: check if it actually exists
    if (url in urlDict) { 
        return urlDict[url];
    } else {
        return 
    }
}

for (let i = 1; i < 10; i++) {
    url = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);
    console.log(nexturl(url));
}

console.log("______________")

for (let key in urlDict) {
    console.log(key + ": " + urlDict[key]);
}