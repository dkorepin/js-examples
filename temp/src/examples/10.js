//GenomicRangeQuery
//Find the minimal nucleotide from a range of sequence DNA.

const FACTORLIST = ['A', 'C', 'G', 'T'];

function solution(S, P, Q) {
    const factor = [];
    const result = new Array(P.length).fill(4);

    for(let i = 0; i < S.length; i++) {
        factor.push(FACTORLIST.indexOf(S[i])+1);
    }

    for(let j = 0; j < P.length; j++) {
        for(let i = P[j]; i <= Q[j]; i++) {
            result[j] = Math.min(result[j], factor[i]);
            if (result[j] === 1) break;
        }
    }
    
    return result;
}