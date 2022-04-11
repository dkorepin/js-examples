// Brackets
// Determine whether a given string of parentheses (multiple types) is properly nested.

function solution(S) {
    const stack = [];
    const last = S[S.length - 1];
    if (S[0]===')' || S[0]==='}' || S[0]===']') return 0;
    if (last==='(' || last==='{' || last==='[') return 0;

    for(let i=0; i<Math.min(S.length, 200000); i++) {
        switch(S[i]) {
            case ']':
                if(stack.length > 0 && stack[stack.length - 1] === '['){
                    stack.pop();
                }
                break;
            case '}':
                if(stack.length > 0 && stack[stack.length - 1] === '{') {
                     stack.pop();
                }
                break;
            case ')':
                if(stack.length > 0 && stack[stack.length - 1] === '('){ 
                     stack.pop();
                }
                break;
            default:
                stack.push(S[i]);
        }
    }

    return stack.length > 0 ? 0 : 1;
}
