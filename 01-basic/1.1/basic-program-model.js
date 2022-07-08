// 二分查找
function binarySearch(key, a) {
    let lo = 0;
    let hi = a.length - 1;
    while (lo <= hi) {
        const mid = lo + (hi - lo) / 2;
        if (key < a[mid]) {
            hi = mid - 1;
        }
        else if (key > a[mid]) {
            lo = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
// function main():void{
//     const whiteList:Array<any>=arguments[0]
//     whiteList.sort()
// }
// 1.1.25
// 給出使用欧几里得算法计算105和24的最大公约数的过程中得到的一系列p和q的值
// test eg:1,111,111 1,234,567
function gcd(...arguments) {
    const length = arguments.length;
    const q = arguments[length - 1];
    if (length < 2)
        return false;
    else if (length > 2)
        return gcd(gcd(...Array.from(arguments).slice(0, length - 2)), q);
    else {
        return gcd(arguments[0], arguments[1]);
    }
}
console.log(gcd(10, 1));
// function gcd1(p:number,q:number):number{
//     if(q===0){
//         return p
//     }else{
//         const r=p%q
//         return gcd1(q,r)
//     }
// }
