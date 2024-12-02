import { readInput } from '../util/input';
import { insertInSortedArray } from '../util/sort';

const input = readInput('day1.txt').toString().trim();

type ElfWithCalories = {
  elfNumber: number;
  totalCalories: number;
};

const numbers: number[][] = [[], []];

input.split('\n').map((line) => {
  const [n1, n2] = line.split(/\s+/);
  numbers[0].push(parseInt(n1));
  numbers[1].push(parseInt(n2));
});

numbers.forEach((n) => n.sort());

console.log(
  numbers[0].reduce((sum, n1, i) => sum + Math.abs(n1 - numbers[1][i]), 0)
);
