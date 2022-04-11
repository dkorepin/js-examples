// MaxProductOfThree
// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).

function solution(A) {
    if (A.length < 3) return 0;
    if (A.length === 3) return A.reduce((res, curr) => res*curr);
    A.sort((a, b) => b-a);
    const l = A.length-1;
    return Math.max(A[0]*A[1]*A[2], A[0]*A[l]*A[l-1]);
}

