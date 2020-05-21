'use strict';

/*
1. What is the Big O for this?
==============================
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, 
preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell 
out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

Answer: This is O(1) because everyon in the room hears the declaration, making the search essentially 15 seperate searches of an array
that has a length of 1.

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog 
who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first 
person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find 
someone who has a golden or there is no one else to ask.

Answer: This is O(n) because the number of requests to complete the search will scale linearly with the number of people in the room.

*/

/*
2. Even or odd
==============
What is the Big O of the following algorithm? Explain your answer.
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}

Answer: This is O(1) because only a single comparison is being performed, regardless of what the input number is.

*/

/* 
3. Are you here?
================
What is the Big O of the following algorithm? Explain your answer.
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

Answer: This is O(n^k) k=2 because it has nested loops that are each O(n).

*/

/*
4. Doubler
==========
What is the Big O of the following algorithm? Explain your answer.
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

Answer: This is O(n) as the number of operations scales linearly with the length of the array.

*/

/*
5. Naive search
===============
What is the Big O of the following algorithm? Explain your answer.

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

Answer: This is O(n) as it scales linearly with the length of the array.
*/

/*
6. Creating pairs
=================
What is the Big O of the following algorithm? Explain your answer.

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

Answer: This is O(n^k) k=2 because it has nested loops that are each O(n).

*/

/*
7. Compute the sequence
=======================
What does the following algorithm do? What is its runtime complexity? Explain your answer.

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

Answer: This function produces an array containing the Fibonacci Sequence of a given number (num).
It has a time complexity of O(n) as the resulting array scales linearly as the number increases.

*/

/*
8. An efficient search
======================
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. 
Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

Answer: This is O(logn) because it uses heuristics (e.g. the min, max and currentIndex) to complete the task more quickly than a linear function.

*/

/*
9. Random element
=================
What is the Big O of the following algorithm? Explain your answer.

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

Answer: This is O(1) as it only requires a single operation on the array.

*/

/*
10. What Am I?
==============
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer.

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

Answer: This function determines if a number (n) is prime.  This has O(n) complexity because it performs more checks against the input
the greater the input is.

*/

/*
11. Tower of Hanoi
==================
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly 
stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to 
begin with.  The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was 
stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: 
i) Only one disk may be moved at a time 
ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that 
may already be present on that rod. 
iii) A larger disk may not placed on top of a smaller disk

Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?

Answer: 

*/
const solveTower = function(num, start, end, using) {
  if(num === 0) return;
  solveTower(num-1, start, using, end);
  console.log(`Move disc from ${start} to ${end}`);
  solveTower(num -1, using, end, start);
};

//console.log(solveTower(3, 'A', 'C', 'B'));

/*
12. Iterative version
=====================
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

Answer: See Iteratives.js

*/

/*
13. Recursive Big O
===================
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time 
complexities (big O) of each of them.

Answer: 1) O(n) linear to number of sheep, 2) O(n) linear to value of exponent, 3) O(n) linear to length of the string
4) O(n) linear to the value of the number, 5) O(n) linear to the number of breakers in the string, 6) O(n) linear to 
the value of the number, 7) O(n) linear to the value of the number

*/

/*
14. Iterative Big O
===================
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

Answer: 1) O(n) linear to the value of the number, 2) O(n) linear to the value of the exponent. 3) O(n) linear to 
the length of the string, 4) O(n) linear to the value of the number, 5) O(n) linear to the number of splitters in
the string, 6) O(n) linear to the value of the number, 7) O(n) linear to the value of the number

*/