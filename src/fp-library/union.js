/* Simple implementation of union types for pattern matching purposes
based on https://dev.to/avalander/union-types-with-javascript-4emo */

export const union = (...types) => types.reduce(
  (acc, type) => ({
    ...acc,
    [type]: ({ match: (fns) => fns[type] }),
  }), {},
);

export default union;
