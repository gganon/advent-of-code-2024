import { readInput } from '../util/input';

const input = readInput('day2.txt').toString().trim();

const lines = input
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map((n) => parseInt(n)));

const goodLines = lines.filter((line) => {
  const isAscending = line.every(
    (n, i) => i == line.length - 1 || n < line[i + 1]
  );
  const isDescending = line.every(
    (n, i) => i == line.length - 1 || n > line[i + 1]
  );
  const isDiffGood = line.every(
    (n, i) => i == line.length - 1 || Math.abs(n - line[i + 1]) - 1 < 3
  );

  return (isAscending || isDescending) && isDiffGood;
});

console.log(goodLines.length);
