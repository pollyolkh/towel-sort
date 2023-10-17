module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  const sortedArray = matrix.reduce((result, row, index) => {
    if (index % 2 === 0) {
      return result.concat(row);
    } else {
      return result.concat(row.reverse());
    }
  }, []);

  return sortedArray;
};
