// Triangle
// Determine whether a triangle can be built from a given set of edges. if 0 ≤ P < Q < R < N 

function solution(A) {
    if (A.length < 3) return 0;
    A.sort((a, b) => b-a);
    
    for(let i = 0; i<A.length; i++) {
        if (A[i]+A[i+1] > A[i+2] && A[i+1]+A[i+2] > A[i] && A[i+2]+A[i] > A[i+1]) return 1;
    }

    return 0;
}