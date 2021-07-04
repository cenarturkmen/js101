//https://leetcode.com/explore/challenge/card/july-leetcoding-challenge-2021/608/week-1-july-1st-july-7th/3800/
// o(logn) time, o(1) space complexity
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length-1;
    
    while(left<right){
        const mid = parseInt((left + right) / 2);
        
        if(x - arr[mid] > arr[mid + k] - x){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return arr.slice(left, left + k);
};

console.log(findClosestElements([1,2,3,4,5], 4, 3))