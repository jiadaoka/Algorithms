"use strict";
function symCall(result, args) {
    const resultArr = [];
    const arr = [[...result], [...args.shift()]];
    const arrLength = arr.length;
    const itemObj = {};
    for (let i1 = 0; i1 < arrLength; i1++) {
        const arg = [...new Set(arr[i1])];
        const arr2Length = arg.length;
        for (let i2 = 0; i2 < arr2Length; i2++) {
            if (arg[i2] in itemObj) {
                itemObj[arg[i2]] = false;
            }
            else {
                itemObj[arg[i2]] = true;
            }
        }
    }
    for (const i in itemObj) {
        if (itemObj[i])
            resultArr.push(parseInt(i));
    }
    if (args.length === 0)
        return resultArr;
    else
        return symCall(resultArr, args);
}
function sym(...args) {
    const _args = [...args];
    const arrOne = _args.shift();
    const arr = symCall(arrOne, _args);
    return arr;
}
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

//# sourceMappingURL=Find_the_Symmetric_Difference.js.map
