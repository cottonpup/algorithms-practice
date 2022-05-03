/**
 * Return the minimum rectangular area for the given sizes array
 *
 * Source: https://programmers.co.kr/learn/courses/30/lessons/86491?language=javascript
 */

function minimumRectangularArea(sizes) {
  sizes.forEach((size, i) => {
    if (size[0] > size[1]) {
      sizes[i] = [size[1], size[0]];
    }
  });

  return (
    Math.max(...sizes.map((size) => size[0])) * Math.max(...sizes.map((size) => size[1]))
  );
}
