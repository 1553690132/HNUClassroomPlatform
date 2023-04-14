export function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this)
        }, delay);
    }
}

export function getImageUrl(name) {
    return new URL(`../assets/img/${name}.png`, import.meta.url).href
}


export function baseURLToURL(base) {

}


function base64toBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}