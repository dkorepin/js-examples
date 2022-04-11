// Distinct
// Compute number of distinct values in an array.

function solution(A) {
    const buffer = new Set();

    for(let i = 0; i<Math.min(A.length, 100000); i++) {
        if(!buffer.has(A[i])) buffer.add(A[i]);
    }

    return buffer.size;
}
