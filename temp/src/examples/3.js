function cycleRotate (arr) {
    arr.unshift(arr.pop());
}

function solution(A, K) {
    if (A.length === 0) return A;
    let arr = [...A];

    for (let i = 0; i < K; i++) {
      cycleRotate(arr);
    }

    return arr;
}