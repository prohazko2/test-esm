import { sum } from 'https://raw.githubusercontent.com/prohazko2/test-esm/main/math.js';

export function inc(a) {
  return sum(a, 1);
}

export function dec(a) {
  return sum(a, -1);
}
