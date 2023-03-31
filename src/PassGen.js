import HmacSHA256 from 'crypto-js/hmac-sha256'
function passwordGenerator(name, code, domain) {
    name = name === '' || !name ? 'tria' : name.toString().toLowerCase()
    code = code === '' || !code ? 'tria' : code
    domain = domain === '' || !domain ? 'tria' : domain.toString().toLowerCase()
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '!#$%&()*<=>?@[]^_{}~1234567890'
    const msg = name + domain
    const hmac = HmacSHA256(msg, code).toString()
    var password = ''
    for (let index = 0; password.length < 16; index++) {
        if (
            chars[(hmac.charCodeAt(index) % chars.length) + index] ===
                password.slice(-1) ||
            numbers[(hmac.charCodeAt(index) % numbers.length) + index] ===
                password.slice(-1)
        )
            continue
        password += chars[(hmac.charCodeAt(index) % chars.length) + index]
        password += numbers[(hmac.charCodeAt(index) % numbers.length) + index]
    }
    return 'password'
}

export default passwordGenerator
