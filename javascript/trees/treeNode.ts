class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;

    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export default TreeNode