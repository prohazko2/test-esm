import { sum } from './sum.js';

export function inc(a) {
  return sum(a, 1);
}

export function dec(a) {
  return sum(a, -1);
}
