export const quickSort = (input: number[]): number[] => {
  //get the pivot and move it to the end
  const middleIndex: number = Math.round((input.length - 1) / 2);

  const pivot = input[middleIndex];
  input[middleIndex] = input.at(-1)!;
  input[input.length - 1] = pivot;

  console.log(input);

  //take the sub array (from start to the pivotIndex)

  //Move the left bound to the right until it reaches a value >= pivot

  return input;
};
