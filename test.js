import { sum } from './math.js';

export function inc(a) {
  return sum(a, 1);
}

export function dec(a) {
  return sum(a, -1);
}
