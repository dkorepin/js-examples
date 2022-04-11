// NumberOfDiscIntersections
// Compute the number of intersections in a sequence of discs.

function solution(A) {
    let result = 0;
    const rInterval = [];
    const lInterval = [];

    for(let i = 0; i<A.length; i++) {
        rInterval.push(i+A[i]);
        lInterval.push(i-A[i]);
    }

    rInterval.sort((a, b) => a-b);
    lInterval.sort((a, b) => a-b);

    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length && rInterval[i] >= lInterval[j]; j++) {
            result++;
            
            if (result > 10000000)
                return -1;
        }
    }

    return result;
}
