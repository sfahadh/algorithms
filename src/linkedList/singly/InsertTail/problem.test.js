const LinkedList = require("../../starter/singly/linkedList");
const Node = require("../../starter/singly/node");
const generate = require("../../starter/singly/generate");
const InsertTail = require("./problem");

// Test Case 1:
test("Return a linked list with the node of data 4 attached to end", () => {
    const inputList = generate.generateLinkedList(1, 2);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 1, 2);
    const tailNode = new Node(4);
    outputList.insert(tailNode);

    expect(InsertTail(inputList.head, tailNode)).toEqual(outputList.head);
})

// Test Case 2:
test("Return a linked list with the node of data 1 attached to end", () => {
    const outputList = new LinkedList();

    const tailNode = new Node(1);
    outputList.insert(tailNode);

    expect(InsertTail(new LinkedList().head, tailNode)).toEqual(outputList.head);
})

// Test Case 3:
test("Return a linked list with the node of data 8 attached to end", () => {
    const inputList = generate.generateLinkedList(1, 7);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 1, 7);
    const tailNode = new Node(8);
    outputList.insert(tailNode);

    expect(InsertTail(inputList.head, tailNode)).toEqual(outputList.head);
})

// Test Case 4:
test("Return a linked list with the node of data 6 attached to end", () => {
    const inputList = generate.generateLinkedList(3, 5);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 3, 5);
    const tailNode = new Node(6);
    outputList.insert(tailNode);

    expect(InsertTail(inputList.head, tailNode)).toEqual(outputList.head);
})

// Test Case 5:
test("Return a linked list with the node of data 1005 attached to end", () => {
    const inputList = generate.generateLinkedList(34, 1000);
    const outputList = new LinkedList();

    generate.addNodesToLinkedList(outputList, 34, 1000);
    const tailNode = new Node(1005);
    outputList.insert(tailNode);

    expect(InsertTail(inputList.head, tailNode)).toEqual(outputList.head);
})