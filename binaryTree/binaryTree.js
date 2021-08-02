class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    } 
}

class binaryTree{
    constructor(root){
        this.root = new Node(root);
    }

}
/*
let myBinaryTree = new binaryTree(1);

console.log(myBinaryTree.root);
myBinaryTree.left = new Node(2);
myBinaryTree.right = new Node(3);
myBinaryTree.left.left = new Node(4);
myBinaryTree.left.right = new Node(5);
myBinaryTree.right.left = new Node(6);
myBinaryTree.right.right = new Node(7);
console.log(myBinaryTree.left.left.data); 
*/