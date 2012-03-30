module.exports = makeCodes

// probabilities is an array containing objects with "id" and "value"
function makeCodes(probabilities) {
  // work with a copy
  probabilities = probabilities.concat()
  
  // low probabilities at the end
  probabilities.sort(function(a, b) {
    return b.value - a.value
  })
  
  // make a forest
  var forest = probabilities.map(function(o) {
    return {type: 'leaf', obj: o, value: o.value}
  })
  
  // join trees
  while (forest.length > 1) {
    var a = forest.pop(), b = forest.pop()
    var newtree = {type: 'joined', value: a.value+b.value, a: a, b: b}
    insertSorted(forest, newtree)
  }
  
  // make codes
  function traverse(node, code) {
    if (node.type === 'leaf') return node.obj.code = code.concat()
    code.push(0), traverse(node.a, code), code.pop()
    code.push(1), traverse(node.b, code), code.pop()
  }
  traverse(forest[0], [])
}

function insertSorted(array, object) {
  for (var i=0; i<array.length && array[i].value>object.value ; i++);
  // i=0 means "insert before first"
  array.splice(i, 0, object)
}
