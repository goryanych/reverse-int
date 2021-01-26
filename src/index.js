module.exports = function reverse (n) {
  n = parseInt(n.toString().split('').reverse().join(''));
  return n;
}
