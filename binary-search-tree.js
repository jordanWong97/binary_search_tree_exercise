class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //check root, if null or if value is less than or greater than root
    //if less, go left, more go right
    //only insert if node is null
    let toAddStack = [this.root];
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    while (toAddStack.length) {
      let current = toAddStack.shift();

      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
        } else {
          toAddStack.push(current.left);
        }
      }
      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
        } else {
          toAddStack.push(current.right);
        }
      }
    }
    return this;
  }


  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    if (val < current.val) {
      if (current.left) {
        return this.insertRecursively(val, current.left);
      } else {
        current.left = newNode;
        return this;
      }
    }
    if (val > current.val) {
      if (current.right) {
        return this.insertRecursively(val, current.right);
      } else {
        current.right = newNode;
        return this;
      }

    }

  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let toFindStack = [this.root];

    if (this.root === null) {
      return undefined;
    }

    while (toFindStack.length) {
      let current = toFindStack.shift();

      if (current.val === val) {
        return current;
      }

      else if (val < current.val) {
        if (current.left) {
          toFindStack.push(current.left);
        } else {
          return undefined;
        }
      }
      else if (val > current.val) {
        if (current.right) {
          toFindStack.push(current.right);
        } else {
          return undefined;
        }
      }
    }

    return undefined;
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) {
      return undefined;
    }

    if (current.val === val) {
      return current;
    }

    if (val < current.val) {
      if (current.left) {
        return this.findRecursively(val, current.left);
      } else {
        return undefined;
      }
    }

    if (val > current.val) {
      if (current.right) {
        return this.findRecursively(val, current.right);
      } else {
        return undefined;
      }
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visitedNodes = []) {
    if (this.root === null) return visitedNodes;
    visitedNodes.push(node.val);
    node.left && this.dfsPreOrder(node.left, visitedNodes);
    node.right && this.dfsPreOrder(node.right, visitedNodes);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
