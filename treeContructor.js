/**The function below will create a new array of all the integers(nodes) and count the number of
 * times an integer appears(edges). If any integer appears greater than or equal to four times, it will return false
 * if not, it will return true. This will check if the given array can form a binary tree, because no node should have
 * more than three edges in a binary tree.
 */

function treeConstructor(strArr) {
  const newArr = [];
  const intCount = {};

  /**Create an array(newArr) with all the integers */
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].match(/[0-9]+/g)[0]);
    newArr.push(strArr[i].match(/[0-9]+/g)[1]);
  }

  /**Assign each integer the value of number of times it appears*/
  newArr.forEach((n) => (intCount[n] = (intCount[n] || 0) + 1));

  /**Check if an integer have edge count greater than or equals to four */
  for (e in intCount) {
    if (intCount[e] >= 4) return false;
  }

  return true;
}
