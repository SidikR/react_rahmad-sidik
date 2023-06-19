let arr = [1.5, 2.56, 5.1, 12.33];

console.log(arr);

let newArr = arr.map((element) => {
  return Math.round(element);
});

console.log(newArr);
