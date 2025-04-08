const solve = expression => {
  const getSum = arr => {
    return arr.split(/[\+-]/).map(v => +v).reduce((acc, n) => acc + n, 0);
  }
  const firstMinus = expression.indexOf('-');
  if (firstMinus === -1) {
    console.log(getSum(expression));
  } else {
    const plus = getSum(expression.slice(0, firstMinus));
    const minus = getSum(expression.slice(firstMinus+1));
    console.log(plus - minus);
  }
};

const expression = require('fs').readFileSync('/dev/stdin').toString().trim();
solve(expression);