function fib() {
  let fib = [0, 1];

  for (let i = 0; i < 48; i++) {
    fib.push(fib[i] + fib[i+1]);
  }
  return fib;
}
console.log(fib());

function numsToStrings(array) {
  return _.map(array, function(num) { return num.toString() } );
}
console.log(numsToStrings(fib()));

function numEvenNums(array) {
  return _.reduce(_.filter(array, function(num) { return num % 2 == 0 }), function(memo) { return memo + 1 }, 0);
}
console.log(numEvenNums(fib()));

