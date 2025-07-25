"use strict";

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // insert node at 1th
  insertFirst = (data) => {
    this.head = new Node(data, this.head);
  };
  // insert last node
  insertLast = (data) => {
    let newNode = new Node(data);
    let current;
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };
  // size
  size() {}
  // nth node of list
  // join
  // map
  // filter
  // find
  //print data
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      //exit from infity loop to just check the first node
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(3);
ll.insertFirst(2);
ll.insertFirst(1);
ll.insertLast(4);
ll.printList();
console.log(ll);
