import { mergeSort } from "./mergesort/mergesort";
import { quickSort } from "./quicksort/quicksort";

console.clear();


const input: number[] = [5, 3, 8, 2, 1, 4];
const expected: number[] = [1, 2, 3, 4, 5, 8];

const mergeSortResult = mergeSort(input);

if(JSON.stringify(expected) ===  JSON.stringify(mergeSortResult)){
    console.log("🟢 Mergesort Test passed!");
}else{
    const message: string = `Input: ${input}\nExpected: ${expected}\nGot: ${mergeSortResult}`;
    console.error(`\n\n----------------------------\n\n${message}`);
    console.log("🔴 Mergesort Test failed!");
}

const quickSortResult = quickSort(input);

if(JSON.stringify(expected) ===  JSON.stringify(quickSortResult)){
    console.log("🟢 Quicksort Test passed!");
}else{
    const message: string = `Input: ${input}\nExpected: ${expected}\nGot: ${mergeSortResult}`;
    console.error(`\n\n----------------------------\n\n${message}`);
    console.log("🔴 Quicksort Test failed!");
}