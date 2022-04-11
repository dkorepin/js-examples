function solution(A) {
    const max = A.length + 1;
    const buffer = new Set(A);

    for(let i = max; i > 0; i--) {
        if (!buffer.has(i)) return i;
    }

    return 0;
}