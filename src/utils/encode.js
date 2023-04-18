import JSEncrypt from 'jsencrypt'

export default {
    encodeRSA(word, key) {
        key = key ? key : process.env.VITE_APP_PUBLIC_KEY
        const jsRsa = new JSEncrypt()
        jsRsa.setPublicKey(key)
        return jsRsa.encrypt(word)
    }
}
