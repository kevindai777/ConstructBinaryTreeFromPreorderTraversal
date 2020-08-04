//Objective is to, given a preorder traversal, create the valid binary tree from it

class Node {
    constructor(val, left = null, right = null) {
      this.val = val
      this.left = left
      this.right = right
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let preorder = [8,5,1,7,10,12]


//O(n) solution that goes through the preorder values one by one, adjusting the 
//bounds as we recurse through the left and right subtrees

function build(lower, upper) {
    //Make sure it's still in bounds
    if (preorder[0] < lower || preorder[0] > upper) {
        return null
    }
    
    //If no values left in recursion
    if (preorder.length == 0) {
        return null
    }
    
    //Make sure all values in left subtree are less than the root.val 
    //Make sure all values in right subtree are greater than the root.val
    let root = new Node(preorder.shift())
    root.left = build(lower, root.val)
    root.right = build(root.val, upper)
    
    return root
}

return build(-Infinity, Infinity)