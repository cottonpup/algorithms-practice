// Problem Source: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays

function rotLeft(a, d) {
  return a.splice(d).concat(a.splice(0, d));
}
