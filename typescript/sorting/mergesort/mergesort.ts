export const mergeSort = (input: number[]): number[] => {
  if (input.length <= 1) {
    return input;
  }
  
  const middleIndex: number = Math.round(input.length / 2);
  const leftSubArray: number[] = mergeSort(input.slice(0, middleIndex));
  const rightSubArray: number[] = mergeSort(
    input.slice(middleIndex, input.length)
  );

  return merge(leftSubArray, rightSubArray);
};

const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        result.push(left[leftIndex++]);
      } else {
        result.push(right[rightIndex++]);
      }
    } else if (leftIndex < left.length) {
      result.push(left[leftIndex++]);
    } else if (rightIndex < right.length) {
      result.push(right[rightIndex++]);
    }
  }

  return result;
};
