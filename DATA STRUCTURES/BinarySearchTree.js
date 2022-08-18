//Binary Search Tree
class Node {
 constructor(val) {
  this.val = val;
  this.left = null;
  this.right = null;
 }
}
class BinarySearchTree {
 constructor() {
  this.root = null;
 }

 insert(val) {
  let node = new Node(val);
  if (this.root === null) {
   this.root = node;
   return this;
  }
  let current = this.root;
  while (true) {
   if (val === current.val) return undefined;
   if (val < current.val) {
    if (current.left === null) {
     current.left = node;
     return this;
    }
    current = current.left;
   }
   else if (val > current.val) {
    if (current.right === null) {
     current.right = node;
     return this;
    }
    current = current.right;
   }
  }
 }

 contains(val) {
  if (this.root === null) return false;

  let current = this.root;
  let found = false;
  while (current && !found) {//cannot update current and loop over, and have not found
   if (val < current.val) {
    current = current.left;
   }
   else if (val > current.val) {
    current = current.right;
   } else {
    return true;
   }
  }
  return false;
 }


 find(val) {
  if (this.root === null) return undefined;
  let found = false;
  let current = this.root;
  while (current && !found) {
   if (val < current.val) {
    current = current.left;
   }
   else if (val > current.val) {
    current = current.right;
   } else {
    found = true;
   }
  }
  if (!found) return undefined;
  return current;
 }

 BFS() {
  let node = this.root,
   data = [],
   queue = [];

  queue.push(node);
  while (queue.length) {
   node = queue.shift();
   data.push(node.val);//only place where data is being inserted to data
   if (node.left) queue.push(node.left);
   if (node.right) queue.push(node.right);
  }
  return data;
 }

 DFSPreOrder() {
  let current = this.root,
   data = [];

  function traverse(nodeInput) {
   data.push(nodeInput.val);
   if (nodeInput.left) traverse(nodeInput.left);//does all the lefts first
   if (nodeInput.right) traverse(nodeInput.right);
  }
  helper(current);//starts at root
  return data;
 }
}


let tree = new BinarySearchTree();
tree.insert(12);
tree.insert(6);
tree.insert(13);
tree.insert(10);
console.log(tree.DFSPreOrder());






//Breadth First Search... siblings BEFORE children
//DeQ means remove from head => shift(), add to Q means add to tail => push()
// push to ARR-visited means arr.push()
//1. vars: HelperQ, arr-visted
//2. root --> Q
//3. Loop while Q has values
//-DeQ from Q and push to ARR-visited
// DeQed.left? --> Q
// DeQed.right? --> Q
//4. return ARR-visited (full of sibling values first, and then children)

//DFS PreOrder = Node, entire left, entire right
// 2 variables, data and current
//helper function accepts node
//push node into data array
//if node has left, call helper on left
//if node hasr ight, call helper on right