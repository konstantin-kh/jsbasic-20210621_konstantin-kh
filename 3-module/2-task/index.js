function filterRange(arr, a, b) {
   const found = [];
   const target = [a, b - 1];

   for (let i = 0; i <= arr.length + 1; i++) {
     if (arr.includes(arr[target[i]])) {
       found.push(arr[target[i]]);
     }
   }
   return found;
}
