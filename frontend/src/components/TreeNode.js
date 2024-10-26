import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TreeNode({ node, onAdd, onEdit }) {
  const handleAdd = (direction) => {
    onAdd(node, direction);
  };

  const handleEdit = () => {
    const newValue = prompt("Enter new value:", node.value);
    if (newValue) onEdit(node, newValue);
  };

  return (
    <div className="card text-center m-2" style={{ width: "100%" }}>
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
        {!node.left && (
          <button
            className="btn btn-success m-1"
            onClick={() => handleAdd("left")}
          >
            Add Left
          </button>
        )}
        {!node.right && (
          <button
            className="btn btn-primary m-1"
            onClick={() => handleAdd("right")}
          >
            Add Right
          </button>
        )}
      </div>
    </div>
  );
}

export default TreeNode;
