function accumulate(quad) {
    let sum = 0;
    for (let i = 0; i < quad.length; i++) {
        for (let j = 0; j < quad[i].length; j++) {
            sum += quad[i][j];
        }
    }
    return sum;
}
