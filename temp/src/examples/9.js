// CountDiv
// Compute number of integers divisible by k in range [a..b].

function solution(A, B, K) {
    return Math.ceil((Math.max(B - A, 1)) / K)
}