// 求值和为0的元素的数量

function threeSum(nums){
    const len=nums.length
    let cnt=0
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            for(let k=0;k<0;k++){
                if(i+j+k===0){
                    cnt++
                }
            }
        }
    }
    return cnt
}

// threeSum([-1,0,1,2,-1,-4])


function twoSumFast(nums){
    nums.sort()
    const len=nums.length
    let cnt=0
    for(let i=0;i<len;i++){
        if(BinarySearch(-(nums[i]),nums)>-1){
            cnt++
        }
    }
    return cnt
}



// 二分查找
function BinarySearch(num,nums){
    // nums.sort()
    let left=0
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]===num){
            return mid
        }else if(nums[mid]>num){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return -1
}

// 三数之和
function threeSumFast(nums){
    nums.sort()
    const len=nums.length
    let cnt=0
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(BinarySearch(-(nums[i]+nums[j]),nums)>-1){
                cnt++
            }
        }
    }
}


// 希尔排序
function shellSort(nums){
    let N=nums.length
    let h=1
    while(h<N/3) h=3*h+1
    debugger
    while(h>=1){
        // 将数组变为h有序
        for(let i=h;i<N;i++){
            for(let j=i;j>=h && nums[j]<nums[j-h];j-=h){
                [nums[j],nums[j-h]]=[nums[j-h],nums[j]]
            }
        }
        h=h/3
    }
    return nums
}


// const arr=shellSort([1,2,,7,8,3,4,5,6,9,10,0,9,8,11,89,9,67,8,5,4,3,2,1])
// debugger


// 原地归并
function merge(nums,lo,mid,hi){
    let i=lo
    ,j=mid+1,
    aux=[]
    for(let k=lo;k<=hi;k++){
        aux[k]=nums[k]
    }
    for(let k=lo;k<=hi;k++){
        if(i>mid) nums[k]=aux[j++]
        else if(j>hi) nums[k]=aux[i++]
        else if(aux[j]<aux[i]) nums[k]=aux[j++]
        else nums[k]=aux[i++]
    }
}



// 自顶向下的归并排序

function mereSort(nums,lo,hi){
    if(hi<lo) return
    const mid=lo+Math.floor((hi-lo)/2)
    mereSort(nums,lo,mid) // 将左半边排序
    mereSort(nums,mid+1,hi) // 将右半边排序
    merge(nums,lo,mid,hi) // 原地归并
}



function mergeSort2(nums){
    const N=nums.length
    const aux=new Array(N)
    for(let sz=1;sz<N;sz=sz+sz){
        for(let lo=0;lo<N-sz;lo+=sz+sz){
            merge(nums,lo,lo+sz-1,Math.min(lo+sz+sz,N-1))
        }
    }
}








