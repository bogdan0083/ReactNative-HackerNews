// @flow
import { numStoriesToDisplay } from 'common/constants';

export const createPlaceholderStories = (n: number) =>
  new Array(n).fill({
    _loaded: false,
    _loading: true,
  });

export const padWithPlaceholderStories = (
  arrayOfStories: Array<any>,
  targetLength: number = numStoriesToDisplay
) => [
  ...arrayOfStories,
  ...createPlaceholderStories(targetLength - arrayOfStories.length),
];
