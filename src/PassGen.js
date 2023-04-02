import SHA256 from 'crypto-js/sha256'
function passwordGenerator(name, code, domain) {
    name = name === '' || !name ? 'tria' : name.toString().toLowerCase()
    code = code === '' || !code ? 'tria' : code
    domain = domain === '' || !domain ? 'tria' : domain.toString().toLowerCase()
    const symbols = '!#$%&()*<=>?@[]^_{}~'
    const values = name + domain + code
    const sha256 = SHA256(values)
    var password = ''

    for (let index = 0; password.length < 18; index++) {
        if (index % (sha256.words[0] % index) === 0) {
            password +=
                symbols[
                    Math.abs(sha256.toString().charCodeAt(index)) %
                        symbols.length
                ]
            continue
        }
        password += sha256.toString()[index]
    }
    return password
}

export default passwordGenerator
