const NaryTree = require("../naryTree");
const InsertToNode = require("../insertToNode");

const constructTree = () => {
    const tree = NaryTree(96);
    InsertToNode(tree, [6, 9]);
    return tree;
}

module.exports = constructTree;