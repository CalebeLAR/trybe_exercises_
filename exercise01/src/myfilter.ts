type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function MyFilter<T>(array: Array<T>, Callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (Callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(MyFilter([1, 2, 3], (item, index, array) => item < 3 ));
const Result = MyFilter(["a", 3,"b", "c"], (item, index, array) => {
  return item !== 3
})
console.log(Result);