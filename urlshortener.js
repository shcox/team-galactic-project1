let map = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let maplength = map.length;
let urllen = 6;

function shortenUrl(id) {
    let url = '';
    while (id != -1) {
        url = url + map[id % maplength];
        if (id >= maplength) {
            id = Math.floor(id / maplength);
        } else {
            id = -1;
        }
    }
    let toReturn = url;
    if (url.length < urllen) {
        toReturn = url + '0'*(urllen - url.length);
    }
}

console.log(shortenUrl(1));