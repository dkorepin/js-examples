// PassingCars
// Count the number of passing cars on the road.

function solution(A) {
    let count = 0;
    let totalPairs = 0;

    for(let i = 0; i < A.length; i++) {
        const car = A[i];
        if (car === 0) {
            totalPairs++;
        }
        if (totalPairs > 0) {
            if (car === 1) {
                count = count + totalPairs;
                if (count > 1000000000 ) return -1;
            }
        }
    }

    return count;
}
