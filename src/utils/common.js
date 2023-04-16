export function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this)
        }, delay);
    }
}

export function throttle(fn, delay) {
    let use = true
    return function () {
        if (use) {
            setTimeout(() => {
                fn.call(this)
                use = true
            }, delay);
        }
        use = false
    }
}

export function getImageUrl(name) {
    return new URL(`../assets/img/${name}.png`, import.meta.url).href
}

export function checkPostion() {

}