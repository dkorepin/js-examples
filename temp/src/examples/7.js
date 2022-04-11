// MissingInteger
// Find the smallest positive integer that does not occur in a given sequence.

function solution(A) {
    const max = A.length + 1;
    const buffer = new Set(A);
    const resultBuffer = [];
    let resultValue = max+1;

    for(let i = max; i > 0; i--) {
        if (!buffer.has(i)) resultBuffer.push(i);
    }

    resultBuffer.forEach(num => {
      if (num < resultValue) resultValue = num;
    });

    return resultValue;
}
