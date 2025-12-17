import { describe, test, expect } from '@jest/globals';
import { sortHeroesByHealth } from '../sortHeroes.js';

describe('sortHeroesByHealth', () => {
  test('sorts heroes by health descending', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 }
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 }
    ];

    const result = sortHeroesByHealth(input);
    expect(result).not.toBe(expected);
    expect(result).toEqual(expected);
  });

  test('does not mutate the original array', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 }
    ];
    const snapshot = [...input];

    sortHeroesByHealth(input);

    expect(input).toEqual(snapshot);
  });
});
