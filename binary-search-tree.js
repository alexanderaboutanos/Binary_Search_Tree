/** @format */

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
    this.orderData = [];
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (current) {
      if (current.val === val) return undefined;
      if (current.val > val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root === null
      ? (this.root = this.insertRec(this.root, val))
      : this.insertRec(this.root, val);
  }

  insertRec(root, val) {
    if (root === null) {
      root = new Node(val);
      return root;
    } else if (val < root.val) {
      root.left = this.insertRec(root.left, val);
    } else if (val > root.val) {
      root.right = this.insertRec(root.right, val);
    }
    return root;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      else if (val < current.val) {
        current = current.left ? current.left : null;
      } else {
        current = current.right ? current.right : null;
      }
    }
    return current === null ? undefined : current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.findR(this.root, val);
  }

  findR(root, val) {
    if (!root) return undefined;
    if (root.val === val) return root;
    if (root.val > val) return this.findR(root.left, val);
    if (root.val < val) return this.findR(root.right, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    this.orderData = [];
    this.dfsPr(this.root);
    return this.orderData;
  }

  dfsPr(node) {
    this.orderData.push(node.val);
    if (node.left) this.dfsPr(node.left);
    if (node.right) this.dfsPr(node.right);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    this.orderData = [];
    this.dfsI(this.root);
    return this.orderData;
  }

  dfsI(node) {
    if (node.left) this.dfsI(node.left);
    this.orderData.push(node.val);
    if (node.right) this.dfsI(node.right);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    this.orderData = [];
    this.dfsPo(this.root);
    return this.orderData;
  }

  dfsPo(node) {
    if (node.left) this.dfsPo(node.left);
    if (node.right) this.dfsPo(node.right);
    this.orderData.push(node.val);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    this.orderData = [];
    let current = [this.root];
    while (current.length != 0) {
      let next = [];
      for (let node of current) {
        this.orderData.push(node.val);
        if (node.left) next.push(node.left);
        if (node.right) next.push(node.right);
      }
      current = next;
    }
    return this.orderData;
  }
}

module.exports = BinarySearchTree;
