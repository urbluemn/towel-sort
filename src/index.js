

module.exports = function towelSort (matrix) {
    let result = [];
    let innerArr = [];
    for (let i in matrix) {
        if(i>0 & i % 2 !== 0) {
            innerArr = matrix[i].reverse();
        } else {
            innerArr = matrix[i];
        }
        for(let j of innerArr) {
            result.push(j);
        }
    }
  return result;
}
