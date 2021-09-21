let map = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let urllen = 6;

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

export function nexturl(id, url) {
    let shortUrl = shortenUrl(id);
    return shortUrl;
}