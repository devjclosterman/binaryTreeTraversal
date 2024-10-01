const binaryTreeArray = ['R', 'A', 'B', 'C', 'D', 'E', 'F', null, null, null, null, null, null, 'G'];

const leftChildIndex = (index) => 2 * index + 1;
const rightChildIndex = (index) => 2 * index + 2;

const preOrder = (index) => {
    if (index >= binaryTreeArray.length || binaryTreeArray[index] === null) {
        return [];
    }
    return [binaryTreeArray[index]].concat(preOrder(leftChildIndex(index)), preOrder(rightChildIndex(index)));
};

const inOrder = (index) => {
    if (index >= binaryTreeArray.length || binaryTreeArray[index] === null) {
        return [];
    }
    return inOrder(leftChildIndex(index)).concat([binaryTreeArray[index]], inOrder(rightChildIndex(index)));
};

const postOrder = (index) => {
    if (index >= binaryTreeArray.length || binaryTreeArray[index] === null) {
        return [];
    }
    return postOrder(leftChildIndex(index)).concat(postOrder(rightChildIndex(index)), [binaryTreeArray[index]]);
};

console.log("Pre-order Traversal:", preOrder(0));
console.log("In-order Traversal:", inOrder(0));
console.log("Post-order Traversal:", postOrder(0));
