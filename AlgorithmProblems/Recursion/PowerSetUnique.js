function powerSetUnique(str) {
  let subSets = new Set();

  function createSubSet(substr, depth) {
    if(depth === str.length) {
      subSets.add(substr);
      return;
    }
      createSubSet(substr + str[depth], depth + 1)
      createSubSet(substr, depth + 1)
  }

  createSubSet("", 0);
  return subSets;
}
