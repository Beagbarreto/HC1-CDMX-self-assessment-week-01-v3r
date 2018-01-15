/*Tree Map

- [ ] Implement a higher order function, `map`, on the given `Tree` class using pseudoclassical instantiation

Available resources for this prompt
MDN
*/

/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:

  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */
//create root funciont that will use tree classes
var root = function(value){
  this.value = value;
  this.children = [];

  //children array, comes from root
  //array will have bucket in them
  //map will iterate through bucket
};
//Tree classes should be defined
root.prototype.addChild = function(value){
//Tree will have class, new one comes as copy of root
  var root1 = new Tree(value);
  this.children.push(root1)
  //add elements to children
  return root1;
};
//search through bucket
root.prototype.map = function(){
    var branch2 = root1.addchild(value);
    Tree.children[].value;
};
//Map.prototype
