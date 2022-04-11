function solution(A) {
    const pairBuffer = new Set();

    for(let i = 0; i < A.length; i++) {
        const value = A[i];

        if (pairBuffer.has(value)) {
            pairBuffer.delete(value);
        } else {
            pairBuffer.add(value);
        }
    }

    const [first] = pairBuffer;
    return first | 0;
}