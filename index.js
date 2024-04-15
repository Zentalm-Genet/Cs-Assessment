// 1 Sum Zero

function addToZero(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

// Runtime: O(n^2), where n is the number of elements in the array


// 2 Unique Characters:

function hasUniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}

// Runtime: O(n^2), where n is the number of characters in the word



// 3 Pangram Sentence:

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    for (const char of alphabet) {
        if (!cleanedSentence.includes(char)) {
            return false;
        }
    }
    return true;
}

// Runtime: O(n^2), where n is the number of characters in the sentence


 // 4 Longest Word:

 function findLongestWord(words) {
    let longestLength = 0;
    for (const word of words) {
        longestLength = Math.max(longestLength, word.length);
    }
    return longestLength;
}

// Runtime: O(n), where n is the number of words in the list

// Extra Credit

// 1 Sum Zero:
        /* Space Complexity: O(1) - The function uses a constant amount of extra space regardless of the size of the input array. */

// 2 Unique Characters:
            // Space Complexity: O(1) - The function uses a constant amount of extra space regardless of the size of the input word.

// 3 Pangram Sentence:
            // Space Complexity: O(1) - The function uses a constant amount of extra space regardless of the size of the input sentence.

// 4 Longest Word:
            // Space Complexity: O(1) - The function uses a constant amount of extra space regardless of the size of the input list of words.