let map = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let urllen = 6;
let curID = 0;

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
    return shortenUrl(curID);
}

console.log(shortenUrl(1));
for (let i = 0; i < 100000; i++) {
     console.log(nexturl());
}