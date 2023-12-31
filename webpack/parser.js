export function parser() {
  return {
    dataUrlCondition: {
      // inline images < 2 KB
      maxSize: 2 * 1024
    },
  };
};