import { mergeSort } from "./mergesort";

console.clear();

const input: number[] = [5, 3, 8, 2, 1, 4];
const expected: number[] = [1, 2, 3, 4, 5, 8];
const result = mergeSort(input);

if(JSON.stringify(expected) ===  JSON.stringify(result)){
    console.log("🟢 Test passed!");
}else{
    const message: string = `Input: ${input}\nExpected: ${expected}\nGot: ${result}`;
    console.error(`\n\n----------------------------\n\n${message}`);
    console.log("🔴 Test failed!");
}