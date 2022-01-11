module.exports = function reverse (n) {
  return parseInt(n.toString().split('').reverse().join(''));
//  parseint removes the minus sign, lol
}
