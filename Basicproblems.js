// array reverse
let val = [1, 2, 3, 4, 5, 1, 2, 3];
const reverseArray = (val) => {
  let reverse = val.reduce(
    (newarray, currentarray) => [currentarray, ...newarray],
    []
  );
  return reverse.sort();
};

console.log(reverseArray(val));
//-------------------

// removing duplicete from an array

const removeDuplicate = (val) => {
  const duplicate = val.reduce((newarray, currentarray) => {
    if (!newarray.map((element) => element).includes(currentarray))
      return [...newarray, currentarray];
    else return newarray;
  }, []);
  return duplicate;
};
console.log(removeDuplicate(val));
//----------------------------------------

//count of digits in a number
let num = 1056012;

const countofdigit = (num) => {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count += 1;
  }

  return count;
};

console.log(countofdigit(num));

//-------------------------
