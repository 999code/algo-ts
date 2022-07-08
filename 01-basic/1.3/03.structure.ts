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

function evaluate(code:string){
    let ops:Array<string>=new Array()
    let vals:Array<string|number>=new Array()
    const opsList=['+','-','*','/']
    for(let s of code){
        if(s==='('){}else if(opsList.includes(s)){
            ops.push(s)
        }else if(s===')'){
            let op:string=ops.pop()
            let v:number=Number(vals.pop())
            let n:number=Number(vals.pop())
            if(op==='+'){
                v=n+v
            }else if(op==='-'){
                v=n-v
            }else if(op==='*'){
                v=n*v
            }else if(op==='/'){
                v=n/v
            }else if(op==='sqrt'){
                v=Math.sqrt(v)
            }
            vals.push(v)
        }else{
            vals.push(Number(s))
        }
    }
    return vals
}

const structure='(1+(2+3)*(4*5))'

console.log(evaluate(structure));

class FixedCapacityStackOfStrings{
    private a:string[]=[]
    private N:number
    constructor(cap:number){
        this.a=new Array(cap)
    }
    public isEmpty(){
        return this.N===0
    }
    public size(){
        return this.N
    }
    public push(item){
        this.a[this.N+1]=item
    }
    public pop(){
        return this.a[this.N--]
    }

}





