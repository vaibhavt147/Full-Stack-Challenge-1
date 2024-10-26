import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TreeNode = ({ node, onAdd, onEdit }) => {
  const handleAdd = (direction) => {
    onAdd(node, direction);
  };

  const handleEdit = () => {
    const newValue = prompt("Enter new value:", node.value);
    if (newValue) onEdit(node, newValue);
  };

  return (
    <div className="card text-center m-2" style={{ width: "150px" }}>
      <div className="card-body">
        <p className="card-text" onClick={handleEdit}>
          {node.value}
        </p>
        <div className="d-flex justify-content-between">
          {node.left && (
            <TreeNode node={node.left} onAdd={onAdd} onEdit={onEdit} />
          )}
          {node.right && (
            <TreeNode node={node.right} onAdd={onAdd} onEdit={onEdit} />
          )}
        </div>
        <button
          className="btn btn-success m-1"
          onClick={() => handleAdd("left")}
        >
          Add Left
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => handleAdd("right")}
        >
          Add Right
        </button>
      </div>
    </div>
  );
};

const TreeBuilder = () => {
  const [root, setRoot] = useState({ value: "Root", left: null, right: null });

  const addNode = (parent, direction) => {
    const newValue = prompt(`Enter value for ${direction} node:`);
    if (!newValue) return;

    const newNode = { value: newValue, left: null, right: null };
    const updateTree = (node) => {
      if (node === parent) {
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
      if (current === node) {
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

  const dfs = (node) => {
    if (!node) return [];
    return [node.value, ...dfs(node.left), ...dfs(node.right)];
  };

  const bfs = (node) => {
    const result = [];
    const queue = [node];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  };

  const handleDFS = () => {
    alert("DFS: " + dfs(root).join(", "));
  };

  const handleBFS = () => {
    alert("BFS: " + bfs(root).join(", "));
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Binary Tree Builder</span>
      </nav>
      <div className="text-center mt-4">
        <TreeNode node={root} onAdd={addNode} onEdit={editNode} />
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-info m-2" onClick={handleDFS}>
          Run DFS
        </button>
        <button className="btn btn-warning m-2" onClick={handleBFS}>
          Run BFS
        </button>
      </div>
    </div>
  );
};

export default TreeBuilder;
