// import { stdout,stdin } from "process"
// class Stats{
//     public static main(){
//         const Bag=new Set()
//         const {}=process
//         while(stdin){
//             Bag.add(stdin)
//         }
//         const N=Bag.size
//         let sum=0
//         for(let x of Bag){
//             sum+=x
//         }
//         const mean=sum/N
//         sum=0
//         for(let x of Bag){
//             sum+=(x-mean)(x-mean)
//         }
//         const std=Math.sqrt(sum/(N-1))
//         console.log(mean,std);
//     }
// }
function evaluate(code) {
    let ops = new Array();
    let vals = new Array();
    debugger;
    const opsList = ['+', '-', '*', '/'];
    for (let s of code) {
        debugger;
        if (s === '(') {
        }
        else if (opsList.includes(s)) {
            ops.push(s);
        }
        else if (s === ')') {
            let op = ops.pop();
            let v = Number(vals.pop());
            let n = Number(vals.pop());
            if (op === '+') {
                v = n + v;
            }
            else if (op === '-') {
                v = n - v;
            }
            else if (op === '*') {
                v = n * v;
            }
            else if (op === '/') {
                v = n / v;
            }
            else if (op === 'sqrt') {
                v = Math.sqrt(v);
            }
            vals.push(v);
        }
        else {
            vals.push(Number(s));
        }
    }
    return vals;
}
const structure = '(1+(2+3)*(4*5))';
console.log(evaluate(structure));
