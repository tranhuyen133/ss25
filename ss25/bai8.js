let arr = [1, 2, 3, 2, 4, 1, 5, 6, 5, 7, 8, 9, 7];
let counter = {};
arr.forEach(function(element) {
    counter[element] = (counter[element] || 0) + 1;
});
for (let element in counter) {
    if (counter[element] >= 2) {
        console.log(element);
    }
}
