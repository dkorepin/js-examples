// MaxCounters
// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

function solution(N, A) {
    const condition = N + 1;
    let counters = new Array(N).fill(0);
    let maxValue = 0;

    for(let K = 0; K < A.length; K++) {
        const arrayValue = A[K];
        const index = arrayValue - 1;
        if (arrayValue === condition) {
            counters.fill(maxValue);
        } else {
            counters[index]++;
            if(counters[index] > maxValue) maxValue = counters[index];
        }
    }

    return counters;
}