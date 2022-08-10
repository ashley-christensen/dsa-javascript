//node = piece of data - val
//reference to next node - next

class Node {
 constructor(val) {
  this.val = val;
  this.next = null;
 }
}

// const first = new Node('HI');
// first.next = new Node('THERE');
// first.next.next = new Node('ashley')
// console.log(first);
class SinglyLinkedList {
 constructor() {
  this.head = null;
  this.tail = null;
  this.length = 0;
 }
 push(val) {
  const newNode = new Node(value);
  if (!this.head) {
   this.head = newNode;
   this.tail = this.head;
  } else {
   this.tail.next = newNode;
   this.tail = newNode;
  }
  this.length++;
  return this;
 }
}