function encode(str, nr = 0) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return str.split('').map(e => letters.indexOf(e) + nr).reduce((a, c) => {
        if (c >= letters.length) {
            c = c * letters.length * 2 ? c % letters.length : c - letters.length;
        }
        return a + letters[c]
    }, '')
}