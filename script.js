// const str = 'hello whatsup'

// function amountOfWords(s, char){
//     let arr = s.split('')
//     for (let i = 0; i < s.length; i++){
//         if(s[i] === char){
//             arr.splice(i, 1)
//         }
//     }
//     return arr.join('')
// }

// console.log(amountOfWords(str ,'h'))



// binary search 

//im trying to find the index of the target number
//take the array
//find the middle element
//if its not the target element, compare them
//depending on the result of comparison, divide the array in half and then perform
//the comparison on the new half

// function findNumber(arr, num){
//     let middle = arr.length / 2

//     if(arr[middle] === num){
//         return arr[middle]
//     }
//     else if(arr[middle] > num){
//         console.log('this')
//         return findNumber(arr.slice(middle), num)
//     }
//     else if(arr[middle] < num){
//         return findNumber(arr.slice(0,middle), num)
//     }
// }


// const arr = [3,4,7,2,5,8,1,6,9]
// // console.log(findNumber(arr, 7))

// //merge sort 

// function mergeSort(arr){
//     let middle = ((arr.length -1) / 2) 
//     if(arr.length === 1){
//         return false
//     }
// }

// console.log(mergeSort(arr))


//10/13/22
//Object Practice

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
// };

// //returns specific key
// console.log(Object.keys(person)[0])
// const test = []

// if(test.length){
//     console.log(true)
// }
// else console.log(false)

// test.slice()
// test.splice()


// given an integer array nums, return true if any value appears at 
// least twice in the array, and return false if every element is distinct.

//loop through array and store it in a object key. if any of the keys already exist return false 
 
// const nums = [1,2,3,4,5,5]
// const isDuplicate = (nums) => {
// let key = {}
// for(let num of nums){
//     if(key[num]){
//         return false
//     }
//     key[num] = true
// }
// return true
// }
// console.log(isDuplicate(nums))


//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// inputs strings s t 
// output boolean


// 1. if length is different return false
// 2. split('').sort().join('');
// 3. if s != t return false else true


// const validAnagram = (s,t) => {
//     if(s.length != t.length){
//         return false
//     }

//     let a = s.split('').sort().join('');
//     let b = t.split('').sort().join('');

//     if(a === b){
//         return true
//     } 
//     return false
// }

// console.log(validAnagram('cat', 'tac'))





// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to 
// target.

// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice.

// You can return the answer in any order.

//input array nums and int target
//output indices of nums[i] + nums[i] = target

// const a = [2,7,11,15]

// const b = 9


// const twoSum = (nums, target) => {
//     for(let i = 0; i < nums.length; i ++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(twoSum(a,b))


// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically
//  using all the original letters exactly once.

// input array of strings strs
// output array of subarrays of strs all the anagrams grouped

// 1. create a key
// 2. loop through strs
// 3. sort str and check if key[str] exists if it does add str to the array 
// 4. return Object.values[key]

const strs = ['cat', 'tac', 'bob', 'obb'];

const groupAnagrams = (strs) => {
    const key = {}
    for(str of strs){
        let a = str.split('').sort().join('');
        key[a] ? key[a].push(str) : key[a] = [str]
    }
    return Object.values(key)
}

console.log(groupAnagrams(strs))

