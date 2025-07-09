// array reverse
let val = [1, 2, 3, 4, 5];
const reverseArray = (val) => {
  let reverse = val.reduce(
    (newarray, currentarray) => [currentarray, ...newarray],
    []
  );
  return reverse;
};

console.log(reverseArray(val));
