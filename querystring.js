/**
 * Stringify URL search params.
 * @param {*} o URL components to stringify
 */
const querystring = o => {
    if(Object.prototype.toString.call(o) !== '[object Object]') {
        throw new Error(`Received type ${typeof o}, expected Object.`);
    }

    return '?' + Object.entries(o)
        .map(([ k, d ]) => encodeURIComponent(k) + '=' + encodeURIComponent(d))
        .join('&');
}

module.exports = querystring;