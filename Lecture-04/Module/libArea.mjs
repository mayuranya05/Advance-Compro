//libArea.mjs
function araeTriangle(b,h) {
    return (b*h)/2;
}

function araeCircle(r) {
    return Math.PI * r*r;
}

function araeSqr(w,l) {
    return (w*l);
}

export { araeCircle, araeTriangle, araeSqr};