import hmacSHA256 from 'crypto-js/hmac-sha256'
import { Buffer } from 'buffer'
function PasswordGenerator(name = 'tria', code = 'tria', domain = 'tria') {
    const symbols = '!#$%&()*<=>?@[]^_{}~'
    const bytes = Buffer.from(`${name}${domain}`, 'utf-8')
    const c = Buffer.from(code, 'utf8')
    const d = [...c].toString()
    const hmac = hmacSHA256(bytes, d).toString()
    let password = ''
    for (let i = 0; i < 4; i++) {
        password += symbols[(bytes[0] + bytes[1]) % (symbols.length - i)]
    }

    password =
        hmac.slice(0, 3) +
        password[0] +
        hmac.slice(3, 6) +
        password[1] +
        hmac.slice(6, 9) +
        password[2] +
        hmac.slice(9, 12) +
        password[3]
}
export { PasswordGenerator }
