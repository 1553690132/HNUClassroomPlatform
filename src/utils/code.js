// X509解码器
import fs from 'fs'
function encodeKeyByFs() {
    const filePath = 'D:/ClassReception/reception/rsa/rsa_public.key'
    fs.readFile(filePath, 'base64', (err, data) => {
        const pem = "-----BEGIN PUBLIC KEY-----\n" + data + "\n-----END PUBLIC KEY-----\n"
        console.log(pem)
    })
}
encodeKeyByFs()

// 上传解码
function encodeKeyByUpload() {
    const input = document.querySelector('input')
    input.onchange = function (e) {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = function (e) {
            const buffer = e.target.result
            const der = new Uint8Array(buffer)
            const base64 = window.btoa(String.fromCharCode.apply(null, der))
            const pem = "-----BEGIN CERTIFICATE-----\n" + base64 + "\n-----END CERTIFICATE-----\n"
            console.log(pem)
        }
    }
}