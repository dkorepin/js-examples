//Palindroms from string

function solution(S) {
    const numArray = [];
    for(let i = 0; i < S.length; i++) {
        numArray.push(Number(S[i]));
    }
    numArray.sort((a, b) => b-a);

    const pairsBuffer = [];
    const unpairsBuffer = [];
    let pairsCounter = 1;
    let currentPair = numArray[0];
    for(let i = 1; i < numArray.length; i++) {
        if (numArray[i] == currentPair) {
            pairsCounter++;
        } else {
            if (pairsCounter > 1) {
                pairsBuffer.push(currentPair);
            } else {
                unpairsBuffer.push(currentPair);
            }
            currentPair = numArray[i];
            pairsCounter = 1;
        }
    }

    if (pairsCounter > 1) {
      pairsBuffer.push(currentPair);
    } else {
      unpairsBuffer.push(currentPair);
    }

    const maxPair = pairsBuffer.length > 0 ? pairsBuffer[0] : 0;
    const maxUnpair = unpairsBuffer.length > 0 ? unpairsBuffer[0] : 0;

    if (pairsBuffer[0] === 0) pairsBuffer.pop();
    if (pairsBuffer.length === 0) return ''+Math.max(maxPair, maxUnpair);

    let result = '';

    for(let i=0; i<pairsBuffer.length; i++) {
        result = ''+result+pairsBuffer[i];
    }

    if (unpairsBuffer.length > 0) {
        result = ''+result+unpairsBuffer[0];
    }

    for(let i=pairsBuffer.length-1; i>-1; i--) {
        result = result+pairsBuffer[i];
    }
    
    return result;
}