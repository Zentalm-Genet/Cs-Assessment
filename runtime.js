const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array;
}

const arraySizes = {
    "tinyArray": 10,
    "smallArray": 100,
    "mediumArray": 1000,
    "largeArray": 10000,
    "extraLargeArray": 100000
};

console.log("Results:");
for (const key in arraySizes) {
    const size = arraySizes[key];
    const array = getSizedArray(size);
    perf.start();
    doublerAppend(array);
    const resultsAppend = perf.stop();
    perf.start();
    doublerInsert(array);
    const resultsInsert = perf.stop();
    console.log(`${key}:`);
    console.log("  Append:", resultsAppend.preciseWords);
    console.log("  Insert:", resultsInsert.preciseWords);
}
