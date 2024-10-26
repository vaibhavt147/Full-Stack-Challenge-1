import React, { useState } from "react";
import TreeNode from "../components/TreeNode";

function BinaryTree() {
  const [root, setRoot] = useState({ value: "Root", left: null, right: null });

  const addNode = (parent, direction) => {
    const newValue = prompt(`Enter value for ${direction} node:`);
    if (!newValue) return;

    const newNode = { value: newValue, left: null, right: null };
    const updateTree = (node) => {
      if (
        node.value === parent.value &&
        node.left === parent.left &&
        node.right === parent.right
      ) {
        node[direction] = newNode;
      } else {
        if (node.left) updateTree(node.left);
        if (node.right) updateTree(node.right);
      }
    };

    setRoot((prev) => {
      const newRoot = { ...prev };
      updateTree(newRoot);
      return newRoot;
    });
  };

  const editNode = (node, newValue) => {
    const updateTree = (current) => {
      if (
        current.value === node.value &&
        current.left === node.left &&
        current.right === node.right
      ) {
        current.value = newValue;
      } else {
        if (current.left) updateTree(current.left);
        if (current.right) updateTree(current.right);
      }
    };

    setRoot((prev) => {
      const newRoot = { ...prev };
      updateTree(newRoot);
      return newRoot;
    });
  };

  console.debug(root);
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Binary Tree Builder</span>
      </nav>
      <div className="text-center mt-4">
        <TreeNode node={root} onAdd={addNode} onEdit={editNode} />
      </div>
    </div>
  );
}

export default BinaryTree;
