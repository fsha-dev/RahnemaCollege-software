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
    this.size = 0;
  }
  // insert node at 1th
  insertFirst = (data) => {
    this.head = new Node(data, this.head);
    this.size += 1;
  };
  // insert last node
  insertLast = (data) => {
    let newNode = new Node(data);
    let current = this.head;
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size += 1;
  };
  // size
  getSize = () => {
    return this.size;
  };
  // nth node of list
  getAt = (idx) => {
    let current = this.head;
    if (idx >= 0 && idx <= this.size) {
      for (let i = 0; i <= idx; i++) {
        if (i === idx) {
          return current;
        } else {
          current = current.next;
        }
      }
    }
    return null;
  };
  // join
  join = (seperator) => {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr.join(seperator);
  };
  // map
  map = (fn) => {
    let current = this.head;
    // const newList = new LinkedList();

    const startElementId = current.next.data.id;
    while (current && current.data.id !== startElementId) {
      current.data = fn(current.data);
      // newList.insertLast(fn(current.data));
      current = current.next;
    }
    // return newList;
  };
  // filter
  filter = (fn) => {
    let current = this.head;
    let newList = new LinkedList();
    for (let i = 0; i < this.size; i++) {
      if (fn(current.data)) {
        newList.insertLast(current.data);
      }
      current = current.next;
    }
    return newList;
  };
  // find
  find = (fn) => {
    let current = this.head;
    while (current) {
      if (fn(current.data)) {
        return current.data;
      }
      current = current.next;
    }
    return null; // if nothing match
  };

  //print data
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      //exit from infity loop to just check the next node
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insertFirst(300);
list.insertFirst(200);
list.insertFirst(100);
list.insertLast(400);
list.insertLast(500);
list.insertLast(600);
list.printList();
console.log(list.getAt(6));
console.log(list.getSize());
console.log(list.join(","));
console.log(list.map(multiple));
list.filter(greaterThan200).printList();
console.log(list);
console.log(list.find(greaterThan200));

function multiple(el) {
  return el * 2;
}
function greaterThan200(el) {
  return el > 200;
}
