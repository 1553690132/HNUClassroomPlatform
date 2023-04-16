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

export function toBase64(img) {
    img.setAttribute("crossOrigin", 'Anonymous')
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext("2d")
    function toBase64(img) {
        setTimeout(() => {
            canvas.width = img.offsetHeight
            canvas.height = img.offsetWidth
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            console.log(canvas, canvas.toDataURL());
            return canvas.toDataURL()
        }, 1000);
    }
    return toBase64(img)
}