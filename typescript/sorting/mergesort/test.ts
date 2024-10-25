import { mergeSort } from "./mergesort";

const input: number[] = [5, 3, 8, 2, 1, 4];
const expected: number[] = [1, 2, 3, 4, 5, 8];
const result = mergeSort(input);
const message: string = `Expected: ${expected}\nGot: ${result}`;

if(JSON.stringify(expected) ===  JSON.stringify(result)){
    console.log("🟢 Test passed!");
}else{
    console.log(message);
    console.log("🔴 Test failed!");
}