interface ITreeNode<T> {
    val: T,
    left: TreeNode<any> | null;
    right: TreeNode<any> | null;
}

class TreeNode<T> {
    val: T;
    left: TreeNode<any> | null;
    right: TreeNode<any> | null;

    constructor(val: T, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export default TreeNode