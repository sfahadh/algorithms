//? Solution #1
const solutionOne = root => {
    if (!root) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
}